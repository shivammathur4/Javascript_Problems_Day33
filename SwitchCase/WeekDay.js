io= require('console-read-write');
async function main()
{
    console.log("Please enter the day of week");
    let n= parseInt(await io.read());
    switch(n)
    {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Please enter a valid day!");
    }
}
main();