//Prompt 2
//Given a string {s}
//When a series of strings is created by removing a character from each index
//Then return the string that comes alphabetically first
//Ex. "sandy" becomes ["andy", "sndy", "sady", "sany", "sand"] : return "andy"

args = process.argv.slice(2);
if (args.length == 0){
	console.log("Add an argument to run program [nano prompt2.js hello]");
}
else{
	//Convert argument to string
	var s = args[0];
	s = s.trim();

	//Split string into array of characters
	split = s.split('');
	console.log('Split string: ' + split);

	//Create a placeholder for smallest string
	smallest = s;

	//Loop through ${split} comparing smallest string to newly joined substring
	for(var i = 0; i < split.length; i++){
		temp = [...split];
		temp.splice(i, 1);
		smallest = temp.join('') < smallest ? temp.join('') : smallest;
	} 
	console.log("Smallest substring: " + smallest);
}