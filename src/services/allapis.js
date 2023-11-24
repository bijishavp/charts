
import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";
//need base url and common rqst
//api call from component arrive  here ..it is connected to commonreqst format of api call in commonrequest

export const getBarchartData=async(body)=>{

    return await commonRequest("GET",`${BASE_URL}/barchart`,"")
  
  }
  export const getLineChartData=async(body)=>{

    return await commonRequest("GET",`${BASE_URL}/linechart`,"")
  
  }