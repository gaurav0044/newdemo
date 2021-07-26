import React from "react";
import {  View,Text, SafeAreaView,StyleSheet, FlatList, ActivityIndicator, TextInput} from "react-native";
import {  Card,NoDataFound} from "../../components/search";
import Api from "../../services/Api";
import styles from "../../assets/styles/";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            search:'',
            searchedList:[],
            loading:true,
            bottomLoading:false
        }
        this.page=1;
    }
    componentDidMount(){
        this.getList(1);
    }
   async getList(pageNo){
        console.log(pageNo);
        var {list}=this.state;
        this.setState({
            [this.page<=1?'loading':'bottomLoading']:true
        })
       var res = await Api.getListing(pageNo);
        list=list.concat(res)
        if(list.length>0){
         this.setState({
             list:list,
             [this.page<=1?'loading':'bottomLoading']:false
         })  
        }
    }
    renderList=({item,index})=>{
        return (
            <Card
                id={item.id}
                name={item.name}
                email={item.email}
                body={item.body}
                index={index}
            />
        )
    }
    search=(value)=>{
        var {list,searchedList}=this.state;
        if(value.length>0){
            searchedList=list.filter(e=>(e.id).toString().includes(value) || e.name.includes(value) || e.email.includes(value) || e.body.includes(value))
            this.setState({
                searchedList: searchedList,
                search:value
            });
        }else{
            this.setState({
                searchedList: [],
                search:''
            });
        }        
    }
    render(){
        const{loading ,bottomLoading,search,searchedList,list}=this.state;
        return(
            <SafeAreaView
                style={styles.container}
            >
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={this.search}
                    placeholder={'Search here'}
                />
               { <FlatList
                    data={search.length>0?searchedList:list}
                    renderItem={this.renderList}
                    onEndReached={()=>{
                        this.page+=1
                        this.getList(this.page)
                    }}
                    onEndReachedThreshold={0.2}
                />}
                {
                    search.length>0 && 
                    searchedList.length==0 && 
                    <NoDataFound/>
                }
               {(loading || bottomLoading)&& <ActivityIndicator
                    size={'large'}
                    color={'black'}
                    style={[{
                        position:"absolute", 
                        alignSelf:"center"
                    },this.page<=1?{top:'50%'}:{bottom:'10%'}]}
                />}
            </SafeAreaView>
        )
    }
}

export default Search;