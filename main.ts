// Task 15: Changing guest list: You just heard that one of your guest can't make the dinner,
//so you need to send out a new set of invitations. You will have to think of some one else to invite.

let guestlist: string [] =["Kumail", "Shahid", "Tahami"];
let canNotattend: string ="Tahami";
//console.log(canNotattend+ " " "CanNot attend the dinner");
let newguest: string = "Taha";
guestlist[guestlist.indexOf(canNotattend)]= newguest;
//console.log(guestlist);
guestlist.map((items) => console.log(`Dear ${items}, YOU ARE INVITED TO THE DINNER `));

