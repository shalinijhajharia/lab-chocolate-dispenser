var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color, count)
{
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
for(let i=0;i<count;i++)
{
chocolates.unshift( color);
}
return chocolates;
}

//Progression 2: Remove ___ chocolates from the top the dispenser


function removeChocolates(chocolates,count)
{
    let arr=[];
    if(chocolates.length<count)
    {
        return "Insufficient chocolates in the dispenser";
    }
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    for(let i=0;i<count;i++)
{
arr[i]=chocolates[i];
chocolates.unshift();
}
return arr;
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates,count)
{
    let arr=[];
    if(chocolates.length<count)
    {
        return "Insufficient chocolates in the dispenser";
    }
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    for(let i=0;i<count;i++)
{
arr[i]=chocolates.pop();
}
return arr;
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates,count,color)
{

    var arr=[];
    if(chocolates.length<count)
    {
        return "Insufficient chocolates in the dispenser";
    }
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    let j=0;
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        {
            arr[j]=color;
            chocolates.splice(i,1);
            j++;

        }
        if(j>=count)
        {
            break;
        }
    }
    return arr;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates)
{
    if(chocolates.length==1)
    {
        return [1];
    }
    var arr={
        "green":0,
        "silver":0,
        "blue":0,
        "crimson":0,
        "purple":0,
        "red":0,
        "pink":0

    };
    for(let i=0;i<chocolates.length;i++)
    {
        arr[chocolates[i]]++;
    }
    var count=[];
    var x=0;
    for (const i in arr) {
        if(arr[i]>0)
        {
            count[x]=arr[i];
        x++;
        }
    }
    return count;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates)
{
    if(chocolates.length==1)
    {
        return [1];
    }
    var arr={
        "purple":0,
        "silver":0,
        "red":0,
        "crimson":0,
        "blue":0,
        "green":0,        
        "pink":0

    };
    for(let i=0;i<chocolates.length;i++)
    {
        arr[chocolates[i]]++;
    }
    var count=[];
    var x=0;

    for (const i in arr) {
        if(arr[i]!=0)
        {
          count.push([i, arr[i]]);
        }
        }
     
        count.sort(function(a, b) {
            return b[1] - a[1];
    });
     
    var sorted=[];
    for (let i=0;i<count.length;i++) {
        for(let j=0;j<count[i][1];j++)
        {
            sorted[x]=count[i][0];
            x=x+1;
        }
    }
    return sorted;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,count,color1,color2)
{
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }
    if(color2===color1)
    {
        return "Can't replace the same chocolates";
    }
    let j=0;
    for(let i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color1)
        {
            chocolates[i]=color2;
            j++;
        }
        if(j>=count)
        {
            break;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color1,color2)
{

    if(color2===color1)
    {
        return "Can't replace the same chocolates";
    }
    var arr=[0,[]];
    let j=0;
    for(let i=0;i<chocolates.length;i++)
    {
        if(chocolates[i]==color1)
        {
            chocolates[i]=color2;
            j=j+1;
        }
        else if(chocolates[i]==color2)
        {
            j=j+1;
        }
    }
    return [j,chocolates]
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed