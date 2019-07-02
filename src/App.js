import React from 'react';
import Weather from './Components/Weather';
import Pub from './Components/Pub';
import './App.css';

let pubList = [
  {
    "title" : "Ship & Anchor",
    "distance" : "5",
    "hours" : 
      [
        "10:00 - 2:00",
        "11:00 - 2:00",
        "11:00 - 2:00",
        "11:00 - 2:00",
        "11:00 - 2:00",
        "11:00 - 2:00",
        "10:00 - 2:00"
      ]
    ,
    "happyhour" : [
        "17:00 - 18:00",
        "16:00 - 19:00",
        "16:00 - 19:00",
        "16:00 - 19:00",
        "16:00 - 19:00",
        "16:00 - 19:00",
        "18:00 - 20:00"
    ],
    "specials" : [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      
    ]
  },
   {
    "title" : "National on 17th",
    "distance" : "6",
    "hours" : 
    [
      
        "11:00 - 12:00",
        "11:00 - 12:00",
        "11:00 - 12:00",
        "11:00 - 12:00",
        "11:00 - 1:00",
        "11:00 - 2:00",
        "11:00 - 2:00"

      
    ],
    "happyhour" : [
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00"
      
    ],
    "specials" : [
        undefined,
        "$18 Pizza & Beer",
        "$18 Tacos & Beer",
        "$18 Crispy Chicken Sandwich & Beer",
        "$18 Clive Burger & Beer",
        "$18 Fish and Chips & Beer",
        undefined
      
    ]
  },
  {
    "title" : "Mill Street Brewpub",
    "distance" : "2",
    "hours" : [
        "11:00 - 22:00",
        "11:00 - 22:00",
        "11:00 - 23:00",
        "11:00 - 23:00",
        "11:00 - 23:00",
        "11:00 - 1:00",
        "11:00 - 1:00"   
    ],
    "happyhour" : [
        "11:00 - 22:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00"
    ],
    "specials" : [
        "Brunch & All day happy hour",
        "$9 Personal Nachos",
        "Half-price wings",
        "$7 Muscles",
        "$3 House Tacos",
        undefined,
        "Brunch"
     
    ]
  },
  {
    "title" : "Trolly 5 Brewpub",
    "distance" : "10",
    "hours" : [
        "10:00 - 1:00",
        "11:00 - 1:00",
        "11:00 - 1:00",
        "11:00 - 1:00",
        "11:00 - 2:00",
        "11:00 - 2:00",
        "10:00 - 2:00"   
    ],
    "happyhour" : [
        "15:00 - 18:00",
        "11:00 - 1:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00",
        "15:00 - 18:00"
    ],
    "specials" : [
        "10am - 3pm brunch, $6 brunch mimosas – 10am – 3pm, $5 pints of high five ipa (14oz) – open to close. Live DJ at 9pm.",
        "$12 slow smoked beef brisket sandwich open to close. ALL DAY happy hour open to close.",
        "all smokehouse bbq half price dine in only 5pm – 10pm *while fresh product lasts*. $6.75 conductor lager – silver medal Canadian International Beer Awards 2018 (20oz) open to close",
        "25¢ Wings. $6.75 derailed pale ale (20oz) open to close.",
        "$16 Pizzas. $5 First Crush White IPA (14oz).",
        "$12 smokehouse burger (beef patty / smokehouse brisket / memphis bbq sauce / lto) + side. $5 pints of turntable lager (14oz) open to close. live DJ at 9pm.",
        "10am - 3pm brunch, $6 brunch mimosas – 10am – 3pm, $20 pick your lager pitchers (turntable or conductor), $11 half order route 5 nachos"
     
    ]
  }
];



function App() {
  return (
    <div className="App">
      <header>
          <h1>Patio Picker</h1>
          <Weather />
      </header>
      <div className="pub-wrapper">
        <Pub pubs={pubList} />
      </div>
    </div>

  );

}

export default App;
