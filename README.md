![](./demo/gif/medium.gif)

# medium.css ✍
> a minimal set of typography devoted to Medium.com

## Installation
```sh
npm install --save medium.css
```

If you are not using a bundler download the file ```typo.css``` and link it in your html

## Demo
**live:**
https://codepen.io/lucagez/full/bQObBe/

If you want to run the demo locally just clone the repo and run ```npm install``` and then ```npm start``` inside /demo directory

## Why
I found myself **always** struggling for for a basic set of rules to make a decent reading experience. I find this minimal boilerplate useful for bootstrapping a project with a typography created learning from the best: **Medium.com**.

## Usage
This stylesheet is meant to be only a starting point. So it covers only the basics html elements.
The elements covered are:
- ```h1```
- ```h2```
- ```p```
- ```a```
- ```i```
- ```blockquote```
- ```code```

There are three custom classes:
- ```.highlighted```, highlights text setting background-color
- ```.first-letter```, a big first letter that spans two lines
- ```.subtitle```, for subtitles 

## Fonts used
The Google fonts I found that best mimics the feeling of Medium.com reading experience: 
- **Content font**: ```Lora```, serif
- **UI font**: ```Montserrat```, sans-serif
- **Brand font**: ```Playfair Display```, serif

## Contributing
All PRs are welcomed! If you have some ideas on how to extend this stylesheet don't hesitate 😎

## License
MIT
