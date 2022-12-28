const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2, 
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 4,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  


  var a,c,s,r,x;
  a=[];
  c=0;
  x=[];
  for(j=0;j<passengers.length;j++){
    a[j]=passengers[j].connectedFlights;
  }
 
  for(i=0;i<passengers.length;i++){
   s=Math.max(...a);
   x[i]=s
   r=a.indexOf(s);
   a[r]=null
  }
  

  for(i=0;i<passengers.length;i++){
    for(j=0;j<passengers.length;j++){
      if(x[i]==passengers[j].connectedFlights){
        console.log(passengers[j]);
    }
  }
}