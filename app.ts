
//Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest:string[] = ["Alice", "Eric", "Joe", "Martha", "David"];
guest.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for the dinner?`)
})
let unabletoAttend:string = "Joe";
console.log(`${unabletoAttend} can't make it to dinner.`);
//replacing guest with a new one
let newguest:string = "Daniel"
guest[guest.indexOf(unabletoAttend)] = newguest;
//New invitation
guest.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})
console.log("Great News! I found a bigger dinner table.");
//Adding New Guests
guest.unshift("Ahad");
guest.splice(3,0,"Raza");
guest.push("Meer");
guest.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`)
})


//Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests:string[] = ["Alice", "Eric", "Joe", "Martha", "David"];
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for the dinner?`)
})
let unableToAttend:string = "Joe";
console.log(`${unableToAttend} can't make it to dinner.`);
//replacing guest with a new one
let newGuest:string = "Daniel"
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for dinner?`)
})
console.log("Great News! I found a bigger dinner table.");
//Adding New Guests
guests.unshift("Ahad");
guests.splice(3,0,"Raza");
guests.push("Meer");
guests.forEach(guests =>{
    console.log(`Dear ${guests}, would you like to join me for dinner?`)
})

 console.log("Unfortunately, I can only invite two people for dinner");
 while(guests.length>2){
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
 }

 guests.forEach(guests =>{
    console.log(`Dear ${guests}, you're still invited to dinner.`)
 })
 guests.splice(0,guests.length);
 console.log(guests);
 


//Q18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places:string[] = ["Switzerland", "China", "Korea", "Iceland", "Thailand"];
console.log("Original Order: ",places);
console.log("Alphabetical order: ", [...places].sort());
console.log("Original Order: ",places);
console.log("Reverse Alphabetical Order: ",[...places].sort().reverse());
console.log("Original Order: ",places)
places.reverse();
console.log("Reverse Order: ", places);
places.reverse();
console.log("Original Order: ", places);
places.sort();
console.log("Alhabetical order: ",places);
places.reverse();
console.log("Reverse Aplhabetical Order: ", places);




