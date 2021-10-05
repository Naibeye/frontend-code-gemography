<!-- PROJECT LOGO -->
<br />

  #Front-end coding challenge

The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. 
You'll be fetching the sorted JSON data directly from the Github API (Github API explained down below). 

 
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-description">Project description</a>
     </li>
     <li><a href="#technologies-tools">Technologies tools</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#technologies-tools">Technologies tools</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<!-- PROJECT DESCRIPTION -->

## Project description
***

### Features
* As a User I should be able to list the most starred Github repos that were created in the last 30 days. 
* As a User I should see the results as a list. One repository per row. 
* As a User I should be able to see for each repo/row the following details :
  * Repository name
  * Repository description 
  * Number of stars for the repo. 
  * Number of issues for the repo.
  * Username and avatar of the owner. 
* As a User I should be able to keep scrolling and new results should appear (pagination).

### How to get the data from Github 
To get the most starred Github repos created in the last 30 days (relative to 2017-11-22), you'll need to call the following endpoint : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`

The JSON data from Github will be paginated (you'll receive around 100 repos per JSON page). 

To get the 2nd page, you add `&page=2` to the end of your API request : 

`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2`

To get the 3rd page, you add `&page=3` ... etc

You can read more about the Github API over [here](https://developer.github.com/v3/search/#search-repositories
).

## Technologies tools
***
* [React](https://fr.reactjs.org/): Version 17.0.2
* [Chakra UI](https://chakra-ui.com/): Version 1.6.8
* [axios](https://github.com/axios/axios): Version 0.22.0


## Installation
***
### Getting Started

For the development mode, the following instructions are mandatory:

`$ git clone [Repertoire]`<br />
`$ cd gemography_challenge`<br />
`$ npm install`<br />

To create a file called .env in the root of your project and  define environment variables:
```
REACT_APP_LOGIN = GithubUsername   
github_token = GithubToken //  Generate a personal access token 
```
To Runs the app in the development mode.<br />

`$ npm run start`<br /> 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

For the deployment of this application<br />
`$ npm build`<br />
Builds  for production to the `build` folder.<br />

## Contact
***
DJIMNAIBEYE Sidoine- [@djimnaibeye-sidoine-6a332a36](https://www.linkedin.com/in/djimnaibeye-sidoine-6a332a36/) - dthekplus@gmail.com

Project Link: [https://github.com/Naibeye/gemography](https://github.com/Naibeye/gemography)




