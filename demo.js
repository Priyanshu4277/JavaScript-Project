/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const Store_NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _charging_time, _range, _horsepower, _offroading_capabilities) {//EV's data
   const meta_data = {
      "name": _name,
      "charging_time": _charging_time,
      "range": _range,
      "horsepower": _horsepower,
      "offroading_capable": _offroading_capabilities
   }
   Store_NFT.push(meta_data)
   console.log('"' + _name + '"' + " minted.");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(l=0;l<Store_NFT.length;l++)
   {
      console.log("\nMetadata for " + Store_NFT[l].name + ".");
      console.log("Charge time required(hours): " + Store_NFT[l].charging_time);
      console.log("Range: " + Store_NFT[l].range);
      console.log("Horsepower: " + Store_NFT[l].horsepower);
      console.log("Offroading capable: " + Store_NFT[l].offroading_capable);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply()
{console.log("\nTotal NFTs stored: " + Store_NFT.length);}

// call your functions below this line
mintNFT("GMC Hummer EV", 12.5, 329, 1000, "Yes");
mintNFT("Tesla Model S", 12, 577, 1020, "No")

listNFTs();
getTotalSupply()