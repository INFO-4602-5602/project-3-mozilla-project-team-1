**This is INFO-5602's project 2 by Team 1**
<br></br>Team member:  Keke Wu, Wei Miao, Xu Han, Yawen Zhang, Jiawen Liu


**Brief description of our project(What):**
<br></br>
This project explores Mozilla survey dataset, which collected people's perceptions towards a highly connected world. All of our four visualizations focus on discovering how people's technical level or geolocation (e.g., country) influence their perceptions about technology. Besides the basic requirements, we also satisfied additional requirements: 1) Semantic Zoom (showing detailed proportion of tech level of each country in visualization 1), 2) Missing Data (we treat fields with missing data as NaN and they are not included in the statistics), 3) Coordinated Views (in visualization 2 & 4), 4) Style (we applied consistent division for each chart). 
<br></br>

**Brief description of Visualization 1:**
<br></br>
* What does it show:
     * Global distribution and comparison of people’s tech proficient in four levels.
* Interactions part:
     * Switching among different tech level data from the dropdown list.
     * Mouse over to show a tooltip of the proportion of current tech level of the selected country.
     * Mouse over to show the detail count and proportion of the current tech level in a donut chart.
* Conclusions:
     * Tech ratio of tech level in "Ultra Nerd" and "Luddite" is very low in all countries, most of the people are tech-savvy.
     * The number of people involved in the survey varies widely，in some countries only less than 10 people took the survey, while the countries like USA has about 20,000 people involved in the survey. So it may not reflecting the real situation when the number of participants in the survey was very small.
     * There is no clear standard for technical levels, so people from different countries may have different criteria to evaluate themselves.

**Brief description of Visualization 2:**
<br></br>
* What does it show:
* Interactions part:
     *
     *
* Conclusions:


**Brief description of Visualization 3:**
<br></br>
* What does it show: 
     * The relationship between different countries and the factors influcing their technology devices buying decisions.
     * A gradient heatmap displays consumers' preferences on different factors, ranging from the light pink to dark purple.
* Interactions part:  
     * Mouse over each square to display the country name and the percentage of this factor in that country.
     * Mouse over each square to move between the legend displaying specific percentage.
* Conclusions:
     * Price and Features are top 2 factors that influcing people's buying behavior for most countires.
     * People in France and Belgium consider Convenience as the most important factor when buying new technology devices.
     * People's preferences on other factors such as Safety, Security, User Reviews,Privacy don't have distinct differences.

**Brief description of Visualization 4:**
<br></br>
* What does it show:
     * The relationships between different tech levels and people's perceptions: 1) Who should protect your safety, security and privacy online? 2) How do you think about a world highly connected to internet?
* Interactions part:
     * Mouse over text/bar to show detailed distribution of each category, with updated percentages.
     * Coordinate views between two subgraphs, showing detailed informations corresponding to the same tech level.
* Conclusions:
     * Most people with higher tech level (Technically Savvy or Ultra Nerd) think non-profit organizations like Mozilla should protect their safety, security and privacy online, while most people with lower tech level (Average User or Luddite) don't know who to trust.
     * Most people with higher tech level (Technically Savvy or Ultra Nerd) are cautiously optimistic about a highly connected future, while most people with lower tech level (Average User or Luddite) are a little wary about a highly connected future.
     * Interestingly, people with highest tech level (Ultra Nerd) and people with lowest tech level (Luddite) have higher percentage of people who are scared as hell about a highly connected future than the two levels. 
<br></br>

**Our design process(How and Why):**
* Why:
     <br>1)We first discussed and settled down the theme of our project, which is how different factors related to the tech level or geolocation, e.g., privacy concerns, criteria for purchasing tech products, who to protect safety, security and privacy online and attitude towards a connected future.</br>
     <br>2)With this theme, we brainstromed possible questions that can be explored and listed them in a worksheet. We analyzed them in terms of ways to visualize, meaningfulness, necessities and so on. Based on our analysis, we chose four questions to explore and visualize: 1) What the geo distribution of people with different technical level?, 2) What is the relationship between tech level/geo information and perceptions of privacy? 3) What is the relationship between geo information and criteria when purchasing tech products? 4) What is the relationship between tech level and who to provide protection online, attitude towards a connected future?</br>
     <br></br>
     
* How:
    <br>Considering attributes of different types of charts, we used Map, Pie Chart, Bar Chart, Heatmap and biPartite graph in our visualization. In Viz1, we used a world map to visualize global tech levels information, with a pie chart disclosing detailed population. In Viz2, we used an coordinated pie chart and a bar chart to display people's perceptions of devices privacy issues by their tech savvy and country. In Viz3, we used a heatmap to show the most important factors influencing people's smart devices buying decisions. In Viz4, we used a biPartite graph to display the relationship between people's tech level and their sense of privacy.</br>
    
<br></br>

**Our team roles:**
<br>Keke Wu: Viz3 | Styling</br>
<br>Wei Miao: Viz1 | Framework</br>
<br>Xu Han: Viz2 | Data Processing  </br>
<br>Yawen Zhang: Viz4 | Data Processing  </br>
<br>Jiawen Liu: Viz Prototype | Styling</br>

<br></br>

**How to run our project:**
<br>We used python for data processing and d3 for data visualiazation.</br>
<br>1) open terminal</br>
<br>2) navigate to the project folder</br>
<br>3) python -m SimpleHTTPServer</br>
<br>4) open http://localhost:8000 in browser
