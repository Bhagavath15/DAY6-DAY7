//DAY 6 TASK
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        if(rating === undefined){
            this.rating = "PG"
        }
        else{
            this.rating = rating
        }
    }
    getPG(array){
        var result = [];
        for(var i=0;i<array.length;i++){
            if(array[i].rating === "PG"){
                result.push(array[i])
            }
        }
        return result
    }
}
var movie = new Movie("avenger","Marvel")
var movie1 = new Movie("Deadpool","Disney","PG13")
var movie2 = new Movie("X-man","Disney","PG14")
var arr = [movie,movie1,movie2]
console.log(movie.getPG(arr))

//output
/*[Movie]
0
: 
Movie {title: 'avenger', studio: 'Marvel', rating: 'PG'}
length
: 
1
[[Prototype]]
: 
Array(0)*/

//circle
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }
    get radiusCircle(){
        return this.radius
    }
    get colorCircle(){
        return this.color
    }
    set radiusCircle(radius){
        this.radius = radius
    }
    set colorCircle(color){
        this.color = color
    }
    gettoString(){
        return [`circle radius = ${this.radius}, circle color = ${this.color}`]
    }
    getareaCircle(){
        return 2 * Math.PI * this.radius * this.radius
    }
    getcircumference(){
        return 2 * Math.PI * this.radius
    }
}
var obj = new Circle(1,"Red")
console.log(obj.gettoString())
console.log(obj.getareaCircle())
obj.radiusCircle = 2
console.log(obj.getcircumference())

//output
/*['circle radius = 1, circle color = Red']
script.js:70 6.283185307179586
script.js:72 12.566370614359172 */

//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city
    }
    get namePerson(){
        return this.name
    }
    get agePerson(){
        return this.age
    }
    get genderPerson(){
        return this.gender
    }
    get cityPerson(){
        return this.city
    }
    set namePerson(Person){
        this.name = name;
    }
    set agePerson(Person){
        this.age = age;
    }
    set genderPerson(Person){
        this.gender = gender;
    }
    set cityPerson(Person){
        this.city = city;
    }
    getDetails(){
        return `His name is ${this.name} and his age is ${this.age}.He is ${this.gender} lives in ${this.city}`
    }
}
var obj = new Person("Kumar",22,"Male","xxx")
console.log(obj.getDetails())

//output
//His name is Kumar and his age is 22.He is Male lives in xxx

//write a class to calculate the uber price.

class Uber{
    constructor(basefare,costpermin,ridetime,costpermile,ridedistance,bookingfees){
        this.basefare = basefare;
        this.costpermin = costpermin;
        this.ridetime = ridetime;
        this.costpermile = costpermile;
        this.ridedistance = ridedistance;
        this.bookingfees = bookingfees
    }
    get basefareUber(){
        return this.basefare;
    }
    get costperminUber(){
        return this.costpermin;
    }
    get ridetimeUber(){
        return this.ridetime;
    }
    get costpermileUber(){
        return this.costpermile; 
    }
    get ridedistanceUber(){
        return this.ridedistance;
    }
    get bookingfeesUber(){
        return this.bookingfees;
    }
    set basefareUber(basefare){
        this.basefare = basefare;
    }
    set costperminUber(costpermin){
        this.costpermin = costpermin;
    }
    set ridetimeUber(ridetime){
        this.ridetime = ridetime;
    }
    set costpermileUber(costpermile){
        this.costpermile = costpermile;
    }
    set ridedistanceUber(ridedistance){
        this.ridedistance = ridedistance;
    }
    set bookingfeesUber(bookingfees){
        this.bookingfees = bookingfees;
    }

    getuberprice(){
        return (this.basefare + (this.costpermin * this.ridetime)+(this.costpermile * this.ridedistance)+this.bookingfees)
    }

}
var obj = new Uber(150,5,30,17,30,200)

console.log(obj.getuberprice())

//output
//1010






// DAY 7 TASK
//Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.filter((ele) => console.log(ele.continents = "Asia"))
    var res1 = res.map((ele) => console.log(ele.name.common))
}

//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var data = request.response
    var result = JSON.parse(data);
    var res = result.filter((ele) =>(ele.population < 200000))
    var res1 = res.map((ele) => console.log(ele.name.common))
}

//output
/*script.js:23 Aruba
script.js:23 Wallis and Futuna
script.js:23 Åland Islands
script.js:23 Pitcairn Islands
script.js:23 Seychelles
script.js:23 French Southern and Antarctic Lands
script.js:23 Christmas Island
script.js:23 Saint Martin
script.js:23 Heard Island and McDonald Islands
script.js:23 Antarctica
script.js:23 Greenland
script.js:23 British Indian Ocean Territory
script.js:23 Saint Lucia
script.js:23 Niue
script.js:23 Saint Barthélemy
script.js:23 Grenada
script.js:23 Isle of Man
script.js:23 Curaçao
script.js:23 Dominica
script.js:23 Faroe Islands
script.js:23 Montserrat
script.js:23 Cook Islands
script.js:23 Bermuda
script.js:23 San Marino
script.js:23 Cayman Islands
script.js:23 Cocos (Keeling) Islands
script.js:23 United States Virgin Islands
script.js:23 Norfolk Island
script.js:23 Nauru
script.js:23 Bouvet Island
script.js:23 Micronesia
script.js:23 American Samoa
script.js:23 Anguilla
script.js:23 Marshall Islands
script.js:23 Kiribati
script.js:23 Northern Mariana Islands
script.js:23 Guam
script.js:23 Gibraltar
script.js:23 Vatican City
script.js:23 Jersey
script.js:23 Tuvalu
script.js:23 Saint Helena, Ascension and Tristan da Cunha
script.js:23 Samoa
script.js:23 Guernsey
script.js:23 Tonga
script.js:23 Saint Kitts and Nevis
script.js:23 Falkland Islands
script.js:23 Palau
script.js:23 Turks and Caicos Islands
script.js:23 British Virgin Islands
script.js:23 Liechtenstein
script.js:23 Andorra
script.js:23 Tokelau
script.js:23 Sint Maarten
script.js:23 United States Minor Outlying Islands
script.js:23 Antigua and Barbuda
script.js:23 Saint Pierre and Miquelon
script.js:23 Saint Vincent and the Grenadines
script.js:23 South Georgia
script.js:23 Caribbean Netherlands
script.js:23 Monaco
script.js:23 */

//Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.forEach((ele) => console.log(`${ele.name.common} : ${ele.capital} : ${ele.flag}`))
}

//output
/*
script.js:98 Mauritania : Nouakchott : 🇲🇷
script.js:98 Aruba : Oranjestad : 🇦🇼
script.js:98 Argentina : Buenos Aires : 🇦🇷
script.js:98 Sweden : Stockholm : 🇸🇪
script.js:98 Maldives : Malé : 🇲🇻
script.js:98 Mexico : Mexico City : 🇲🇽
script.js:98 New Zealand : Wellington : 🇳🇿
script.js:98 Ecuador : Quito : 🇪🇨
script.js:98 Wallis and Futuna : Mata-Utu : 🇼🇫
script.js:98 Åland Islands : Mariehamn : 🇦🇽
script.js:98 Montenegro : Podgorica : 🇲🇪
script.js:98 Pakistan : Islamabad : 🇵🇰
script.js:98 Pitcairn Islands : Adamstown : 🇵🇳
script.js:98 Zambia : Lusaka : 🇿🇲
script.js:98 Seychelles : Victoria : 🇸🇨
script.js:98 Malaysia : Kuala Lumpur : 🇲🇾
script.js:98 Norway : Oslo : 🇳🇴
script.js:98 Uzbekistan : Tashkent : 🇺🇿
script.js:98 Vanuatu : Port Vila : 🇻🇺
script.js:98 French Southern and Antarctic Lands : Port-aux-Français : 🇹🇫
script.js:98 Christmas Island : Flying Fish Cove : 🇨🇽
script.js:98 Singapore : Singapore : 🇸🇬
script.js:98 Suriname : Paramaribo : 🇸🇷
script.js:98 Western Sahara : El Aaiún : 🇪🇭
script.js:98 Saint Martin : Marigot : 🇲🇫
script.js:98 Costa Rica : San José : 🇨🇷
script.js:98 Heard Island and McDonald Islands : undefined : 🇭🇲
script.js:98 Ireland : Dublin : 🇮🇪
script.js:98 Antarctica : undefined : 🇦🇶
script.js:98 Australia : Canberra : 🇦🇺
script.js:98 Libya : Tripoli : 🇱🇾
script.js:98 Qatar : Doha : 🇶🇦
script.js:98 Greenland : Nuuk : 🇬🇱
script.js:98 Mauritius : Port Louis : 🇲🇺
script.js:98 Kazakhstan : Nur-Sultan : 🇰🇿
script.js:98 British Indian Ocean Territory : Diego Garcia : 🇮🇴
script.js:98 Albania : Tirana : 🇦🇱
script.js:98 Bahrain : Manama : 🇧🇭
script.js:98 Papua New Guinea : Port Moresby : 🇵🇬
script.js:98 Burundi : Gitega : 🇧🇮
script.js:98 India : New Delhi : 🇮🇳
script.js:98 Uruguay : Montevideo : 🇺🇾
script.js:98 Saint Lucia : Castries : 🇱🇨
script.js:98 Barbados : Bridgetown : 🇧🇧
script.js:98 New Caledonia : Nouméa : 🇳🇨
script.js:98 Latvia : Riga : 🇱🇻
script.js:98 Estonia : Tallinn : 🇪🇪
script.js:98 Niue : Alofi : 🇳🇺
script.js:98 Saint Barthélemy : Gustavia : 🇧🇱
script.js:98 Puerto Rico : San Juan : 🇵🇷
script.js:98 Grenada : St. George's : 🇬🇩
script.js:98 Macau : undefined : 🇲🇴
script.js:98 Cyprus : Nicosia : 🇨🇾
script.js:98 Isle of Man : Douglas : 🇮🇲
script.js:98 Greece : Athens : 🇬🇷
script.js:98 Syria : Damascus : 🇸🇾
script.js:98 Lithuania : Vilnius : 🇱🇹
script.js:98 Curaçao : Willemstad : 🇨🇼
script.js:98 Dominica : Roseau : 🇩🇲
script.js:98 Niger : Niamey : 🇳🇪
script.js:98 Kyrgyzstan : Bishkek : 🇰🇬
script.js:98 Trinidad and Tobago : Port of Spain : 🇹🇹
script.js:98 Togo : Lomé : 🇹🇬
script.js:98 Palestine : Ramallah,Jerusalem : 🇵🇸
script.js:98 Madagascar : Antananarivo : 🇲🇬
script.js:98 Croatia : Zagreb : 🇭🇷
script.js:98 Faroe Islands : Tórshavn : 🇫🇴
script.js:98 Haiti : Port-au-Prince : 🇭🇹
script.js:98 Montserrat : Plymouth : 🇲🇸
script.js:98 Cook Islands : Avarua : 🇨🇰
script.js:98 Timor-Leste : Dili : 🇹🇱
script.js:98 Martinique : Fort-de-France : 🇲🇶
script.js:98 Cuba : Havana : 🇨🇺
script.js:98 Taiwan : Taipei : 🇹🇼
script.js:98 Eswatini : Mbabane : 🇸🇿
script.js:98 Ukraine : Kyiv : 🇺🇦
script.js:98 Bermuda : Hamilton : 🇧🇲
script.js:98 South Korea : Seoul : 🇰🇷
script.js:98 Peru : Lima : 🇵🇪
script.js:98 Iraq : Baghdad : 🇮🇶
script.js:98 Moldova : Chișinău : 🇲🇩
script.js:98 San Marino : City of San Marino : 🇸🇲
script.js:98 Venezuela : Caracas : 🇻🇪
script.js:98 Guyana : Georgetown : 🇬🇾
script.js:98 Cayman Islands : George Town : 🇰🇾
script.js:98 Cambodia : Phnom Penh : 🇰🇭
script.js:98 Cocos (Keeling) Islands : West Island : 🇨🇨
script.js:98 Malta : Valletta : 🇲🇹
script.js:98 Sri Lanka : Sri Jayawardenepura Kotte : 🇱🇰
script.js:98 Israel : Jerusalem : 🇮🇱
script.js:98 Sudan : Khartoum : 🇸🇩
script.js:98 United States Virgin Islands : Charlotte Amalie : 🇻🇮
script.js:98 Eritrea : Asmara : 🇪🇷
script.js:98 Mali : Bamako : 🇲🇱
script.js:98 Somalia : Mogadishu : 🇸🇴
script.js:98 Norfolk Island : Kingston : 🇳🇫
script.js:98 Comoros : Moroni : 🇰🇲
script.js:98 Nicaragua : Managua : 🇳🇮
script.js:98 Russia : Moscow : 🇷🇺
script.js:98 Uganda : Kampala : 🇺🇬
script.js:98 Nauru : Yaren : 🇳🇷
script.js:98 Switzerland : Bern : 🇨🇭
script.js:98 Portugal : Lisbon : 🇵🇹
script.js:98 Tajikistan : Dushanbe : 🇹🇯
script.js:98 South Sudan : Juba : 🇸🇸
script.js:98 Bouvet Island : undefined : 🇧🇻
script.js:98 Micronesia : Palikir : 🇫🇲
script.js:98 American Samoa : Pago Pago : 🇦🇸
script.js:98 Czechia : Prague : 🇨🇿
script.js:98 Botswana : Gaborone : 🇧🇼
script.js:98 Tunisia : Tunis : 🇹🇳
script.js:98 Anguilla : The Valley : 🇦🇮
script.js:98 Guinea-Bissau : Bissau : 🇬🇼
script.js:98 Slovakia : Bratislava : 🇸🇰
script.js:98 Marshall Islands : Majuro : 🇲🇭
script.js:98 Algeria : Algiers : 🇩🇿
script.js:98 Jamaica : Kingston : 🇯🇲
script.js:98 Mozambique : Maputo : 🇲🇿
script.js:98 Spain : Madrid : 🇪🇸
script.js:98 Honduras : Tegucigalpa : 🇭🇳
script.js:98 Netherlands : Amsterdam : 🇳🇱
script.js:98 South Africa : Pretoria,Bloemfontein,Cape Town : 🇿🇦
script.js:98 Azerbaijan : Baku : 🇦🇿
script.js:98 North Macedonia : Skopje : 🇲🇰
script.js:98 Gambia : Banjul : 🇬🇲
script.js:98 Liberia : Monrovia : 🇱🇷
script.js:98 Luxembourg : Luxembourg : 🇱🇺
script.js:98 Cape Verde : Praia : 🇨🇻
script.js:98 Bahamas : Nassau : 🇧🇸
script.js:98 Georgia : Tbilisi : 🇬🇪
script.js:98 Kiribati : South Tarawa : 🇰🇮
script.js:98 Tanzania : Dodoma : 🇹🇿
script.js:98 China : Beijing : 🇨🇳
script.js:98 Guatemala : Guatemala City : 🇬🇹
script.js:98 São Tomé and Príncipe : São Tomé : 🇸🇹
script.js:98 Germany : Berlin : 🇩🇪
script.js:98 Sierra Leone : Freetown : 🇸🇱
script.js:98 Chad : N'Djamena : 🇹🇩
script.js:98 United Kingdom : London : 🇬🇧
script.js:98 Slovenia : Ljubljana : 🇸🇮
script.js:98 Thailand : Bangkok : 🇹🇭
script.js:98 Indonesia : Jakarta : 🇮🇩
script.js:98 Northern Mariana Islands : Saipan : 🇲🇵
script.js:98 Guam : Hagåtña : 🇬🇺
script.js:98 Finland : Helsinki : 🇫🇮
script.js:98 Mayotte : Mamoudzou : 🇾🇹
script.js:98 Gibraltar : Gibraltar : 🇬🇮
script.js:98 Turkmenistan : Ashgabat : 🇹🇲
script.js:98 Kosovo : Pristina : 🇽🇰
script.js:98 Ivory Coast : Yamoussoukro : 🇨🇮
script.js:98 Morocco : Rabat : 🇲🇦
script.js:98 Dominican Republic : Santo Domingo : 🇩🇴
script.js:98 Ghana : Accra : 🇬🇭
script.js:98 Vatican City : Vatican City : 🇻🇦
script.js:98 Jersey : Saint Helier : 🇯🇪
script.js:98 Turkey : Ankara : 🇹🇷
script.js:98 Tuvalu : Funafuti : 🇹🇻
script.js:98 Iran : Tehran : 🇮🇷
script.js:98 Egypt : Cairo : 🇪🇬
script.js:98 Denmark : Copenhagen : 🇩🇰
script.js:98 Kenya : Nairobi : 🇰🇪
script.js:98 Bulgaria : Sofia : 🇧🇬
script.js:98 Zimbabwe : Harare : 🇿🇼
script.js:98 Angola : Luanda : 🇦🇴
script.js:98 Nigeria : Abuja : 🇳🇬
script.js:98 Poland : Warsaw : 🇵🇱
script.js:98 Senegal : Dakar : 🇸🇳
script.js:98 Saint Helena, Ascension and Tristan da Cunha : Jamestown : 🇸🇭
script.js:98 Lebanon : Beirut : 🇱🇧
script.js:98 Samoa : Apia : 🇼🇸
script.js:98 Philippines : Manila : 🇵🇭
script.js:98 Guernsey : St. Peter Port : 🇬🇬
script.js:98 El Salvador : San Salvador : 🇸🇻
script.js:98 Kuwait : Kuwait City : 🇰🇼
script.js:98 Tonga : Nuku'alofa : 🇹🇴
script.js:98 Oman : Muscat : 🇴🇲
script.js:98 Afghanistan : Kabul : 🇦🇫
script.js:98 Saint Kitts and Nevis : Basseterre : 🇰🇳
script.js:98 Central African Republic : Bangui : 🇨🇫
script.js:98 Serbia : Belgrade : 🇷🇸
script.js:98 Armenia : Yerevan : 🇦🇲
script.js:98 Bangladesh : Dhaka : 🇧🇩
script.js:98 Laos : Vientiane : 🇱🇦
script.js:98 Chile : Santiago : 🇨🇱
script.js:98 French Polynesia : Papeetē : 🇵🇫
script.js:98 Panama : Panama City : 🇵🇦
script.js:98 United States : Washington, D.C. : 🇺🇸
script.js:98 Nepal : Kathmandu : 🇳🇵
script.js:98 Myanmar : Naypyidaw : 🇲🇲
script.js:98 Falkland Islands : Stanley : 🇫🇰
script.js:98 Hungary : Budapest : 🇭🇺
script.js:98 Palau : Ngerulmud : 🇵🇼
script.js:98 Equatorial Guinea : Malabo : 🇬🇶
script.js:98 Guinea : Conakry : 🇬🇳
script.js:98 United Arab Emirates : Abu Dhabi : 🇦🇪
script.js:98 Turks and Caicos Islands : Cockburn Town : 🇹🇨
script.js:98 British Virgin Islands : Road Town : 🇻🇬
script.js:98 Liechtenstein : Vaduz : 🇱🇮
script.js:98 Bosnia and Herzegovina : Sarajevo : 🇧🇦
script.js:98 Malawi : Lilongwe : 🇲🇼
script.js:98 Bhutan : Thimphu : 🇧🇹
script.js:98 Cameroon : Yaoundé : 🇨🇲
script.js:98 Andorra : Andorra la Vella : 🇦🇩
script.js:98 Guadeloupe : Basse-Terre : 🇬🇵
script.js:98 Republic of the Congo : Brazzaville : 🇨🇬
script.js:98 Réunion : Saint-Denis : 🇷🇪
script.js:98 Burkina Faso : Ouagadougou : 🇧🇫
script.js:98 Jordan : Amman : 🇯🇴
script.js:98 DR Congo : Kinshasa : 🇨🇩
script.js:98 Tokelau : Fakaofo : 🇹🇰
script.js:98 Vietnam : Hanoi : 🇻🇳
script.js:98 Sint Maarten : Philipsburg : 🇸🇽
script.js:98 Belgium : Brussels : 🇧🇪
script.js:98 United States Minor Outlying Islands : Washington DC : 🇺🇲
script.js:98 Brazil : Brasília : 🇧🇷
script.js:98 Belize : Belmopan : 🇧🇿
script.js:98 Antigua and Barbuda : Saint John's : 🇦🇬
script.js:98 Paraguay : Asunción : 🇵🇾
script.js:98 Benin : Porto-Novo : 🇧🇯
script.js:98 Brunei : Bandar Seri Begawan : 🇧🇳
script.js:98 Bolivia : Sucre : 🇧🇴
script.js:98 Djibouti : Djibouti : 🇩🇯
script.js:98 French Guiana : Cayenne : 🇬🇫
script.js:98 Canada : Ottawa : 🇨🇦
script.js:98 Saint Pierre and Miquelon : Saint-Pierre : 🇵🇲
script.js:98 Japan : Tokyo : 🇯🇵
script.js:98 Rwanda : Kigali : 🇷🇼
script.js:98 Saint Vincent and the Grenadines : Kingstown : 🇻🇨
script.js:98 Iceland : Reykjavik : 🇮🇸
script.js:98 Belarus : Minsk : 🇧🇾
script.js:98 Hong Kong : City of Victoria : 🇭🇰
script.js:98 Lesotho : Maseru : 🇱🇸
script.js:98 Fiji : Suva : 🇫🇯
script.js:98 Austria : Vienna : 🇦🇹
script.js:98 Colombia : Bogotá : 🇨🇴
script.js:98 Gabon : Libreville : 🇬🇦
script.js:98 Saudi Arabia : Riyadh : 🇸🇦
script.js:98 South Georgia : King Edward Point : 🇬🇸
script.js:98 Ethiopia : Addis Ababa : 🇪🇹
script.js:98 Caribbean Netherlands : Kralendijk : 🇧🇶
script.js:98 Monaco : Monaco : 🇲🇨
script.js:98 North Korea : Pyongyang : 🇰🇵
script.js:98 Italy : Rome : 🇮🇹
script.js:98 Namibia : Windhoek : 🇳🇦
script.js:98 Mongolia : Ulan Bator : 🇲🇳
script.js:98 Solomon Islands : Honiara : 🇸🇧
script.js:98 Yemen : Sana'a : 🇾🇪
script.js:98 Romania : Bucharest : 🇷🇴
script.js:98 Svalbard and Jan Mayen : Longyearbyen : 🇸🇯
script.js:98 France : Paris : 🇫🇷 */

//Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){
    var data = request.response    
    var result = JSON.parse(data);
    var res = result.reduce((acc,cv) =>acc + cv.population,0)
    console.log(res)
}

//output
//7777721563

//Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all")

request.send();

request.onload = function(){
    var data = request.response    
    var result = JSON.parse(data);
    var res = result.filter((ele)=> {
        for(let key in ele.currencies){
            if(ele.currencies[key].code ==="USD")
            console.log(ele.name)
        }
    }) 
}

//output
/* American Samoa
script.js:445 Bonaire, Sint Eustatius and Saba
script.js:445 British Indian Ocean Territory
script.js:445 Virgin Islands (British)
script.js:445 Virgin Islands (U.S.)
script.js:445 Cambodia
script.js:445 Ecuador
script.js:445 El Salvador
script.js:445 Guam
script.js:445 Marshall Islands
script.js:445 Micronesia (Federated States of)
script.js:445 Northern Mariana Islands
script.js:445 Palau
script.js:445 Panama
script.js:445 Puerto Rico
script.js:445 Timor-Leste
script.js:445 Turks and Caicos Islands
script.js:445 United States of America*/