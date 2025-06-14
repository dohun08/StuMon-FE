export default function patchDay(day : string){
 return day.split(" ").slice(0, -1).join(" ");
}