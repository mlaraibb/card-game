class country{
    constructor(name,president ){
        this.name = name;
        this.president = president;
    }
    describe(){
        return `${this.name} has ${this.president}.`;
    }
}
class politition{
  constructor(name){
    this.name = name;
    this.country = [];
  }
  addCountry(country){
    if(country instanceof country){
        this.country.push(country);
    }else{
        throw new Error(`You can only add an instance of Country.Argument is not a country :${country}`);
    }
  }
  describe(){
    return`${this.name} has ${this.country.length} country.`;
  }
}
class Menu{
    constructor(){
        this.politition=[];
        this.selectedPolitition = null;
    }
start(){
    let selection = this.showMenuOptions();
    while(selection != 0){
        switch(selection){
            case '1':
                this.createCountry();
                break;
            case '2':
            this.viewCountry();
               break;
            case '3':
                this.deleteCountry();
                break;
            case '4':
            this.displayCountry();
            break;
        default:
            selection = 0;
        }
        selection = this.showMenuOptions();

    }
    alert('bye bye!');
}
showMenuOptions(){
    return prompt(`
    0)exit
    1)create new country
    2)view country
    3)delete country
    4)display all country
    `);
}
showCountryMenuOptios(countryInfo){
return prompt(`
0)back
1)create new politition
2)delete politition
--------------------
${countryInfo}
`);
}
 displayCountry(){
    let countryString = '';
    for(let i = 0; i <this.country.length; i++){
        countryString += i +')' + this.teams [i].name + '\n';
    }
    alert(countryString);
 }
 createCountry(){
    let name = prompt('Enter name for new country:');
    this.country.push(new country(name));
 }

 viewCountry(){
    let index = prompt('Enter the index of the country;');
    if(index > -1 && index < this.country.length){
      this.selectedCountry= this.country[index];
    let dexcription = 'Country Name :' + this.selectedCountry.name + '\n';

    for(let i = 0; i < this.selectedCountry.politition.length; i++){
        description += i+ ')' + this.selectedCountry.politition[i].name + '-' + this.selectedCountry.politition[i].posittion + '\n';

    }
    let selection = this.showPolititionOptions(description);
    switch(selection){
        case '1':
            this.createPolitition();
            break;
        case'2':
        this.deletePolitition();

    }
 }
}
}

let menu = new Menu();
menu.start();