import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zodiacpipe'
})
export class ZodiacpipePipe implements PipeTransform {

  transform(myDate:string): any {
     
    if(myDate.substring(3,5)=="03" || myDate.substring(3,5)=="04")
    {
       if(myDate.substring(3,5)=="03" && ((myDate.substring(0,2)>="21" ) && (myDate.substring(0,2)<="31")) ||
       (myDate.substring(3,5)<="04" && (myDate.substring(0,2)<="19")))
       {
                return 'Arias';
       } 
    }
    if(myDate.substring(3,5)=="04" || myDate.substring(3,5)=="05")
    {
      if(myDate.substring(3,5)=="04" && ((myDate.substring(0,2)>="20" ) && (myDate.substring(0,2)<="30")) ||
      (myDate.substring(3,5)<="05" && (myDate.substring(0,2)<="20")))
      {
               return 'Taurus';
      }  
    }
    if(myDate.substring(3,5)=="05" || myDate.substring(3,5)=="06")
    {
      if(myDate.substring(3,5)=="05" && ((myDate.substring(0,2)>="21" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="06" && (myDate.substring(0,2)<="20")))
      {
               return 'Gemini';
      }  
    }
    if(myDate.substring(3,5)=="06" || myDate.substring(3,5)=="07")
    {
      if(myDate.substring(3,5)=="06" && ((myDate.substring(0,2)>="21" ) && (myDate.substring(0,2)<="30")) ||
      (myDate.substring(3,5)<="07" && (myDate.substring(0,2)<="22")))
      {
               return 'Cancer';
      }  
    }
    if(myDate.substring(3,5)=="07" || myDate.substring(3,5)=="08")
    {
      if(myDate.substring(3,5)=="07" && ((myDate.substring(0,2)>="23" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="08" && (myDate.substring(0,2)<="22")))
      {
               return 'Lio';
      }  
    }
    if(myDate.substring(3,5)=="08" || myDate.substring(3,5)=="09")
    {
      if(myDate.substring(3,5)=="08" && ((myDate.substring(0,2)>="23" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="09" && (myDate.substring(0,2)<="22")))
      {
               return 'Virgo';
      }  
    }
    if(myDate.substring(3,5)=="09" || myDate.substring(3,5)=="10")
    {
      if(myDate.substring(3,5)=="09" && ((myDate.substring(0,2)>="23" ) && (myDate.substring(0,2)<="30")) ||
      (myDate.substring(3,5)<="10" && (myDate.substring(0,2)<="22")))
      {
               return 'Libra';
      }  
    }
    if(myDate.substring(3,5)=="10" || myDate.substring(3,5)=="11")
    {
      if(myDate.substring(3,5)=="10" && ((myDate.substring(0,2)>="23" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="11" && (myDate.substring(0,2)<="21")))
      {
               return 'Scorpio';
      }  
    }
    if(myDate.substring(3,5)=="11" || myDate.substring(3,5)=="12")
    {
      if(myDate.substring(3,5)=="11" && ((myDate.substring(0,2)>="22" ) && (myDate.substring(0,2)<="30")) ||
      (myDate.substring(3,5)<="12" && (myDate.substring(0,2)<="21")))
      {
               return 'Sagittarius';
      }  
    }
    if(myDate.substring(3,5)=="12" || myDate.substring(3,5)=="01")
    {
      if(myDate.substring(3,5)=="12" && ((myDate.substring(0,2)>="22" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="01" && (myDate.substring(0,2)<="19")))
      {
               return 'Capricon';
      }  
    }
    if(myDate.substring(3,5)=="01" || myDate.substring(3,5)=="02")
    {
      if(myDate.substring(3,5)=="01" && ((myDate.substring(0,2)>="20" ) && (myDate.substring(0,2)<="31")) ||
      (myDate.substring(3,5)<="02" && (myDate.substring(0,2)<="18")))
      {
               return 'Aquarius';
      }  
    }
    if(myDate.substring(3,5)=="02" || myDate.substring(3,5)=="03")
    {
      if(myDate.substring(3,5)=="02" && ((myDate.substring(0,2)>="19" ) && (myDate.substring(0,2)<="28")) ||
      (myDate.substring(3,5)<="03" && (myDate.substring(0,2)<="20")))
      {
               return 'picses';
      }  
    }
    return null;
    
  }

}
