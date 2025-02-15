let prevScrollPos = window.scrollY;
// use let instead of const here.  
window.onscroll = function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
};



workxpinnerhtml = `<div>
<img class='logo' src='images/BCF_Logo.jpg' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>Bio Carbon Fuels LLC.</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Project Manager</p>
  <p class='experience-details'>January 2024 – Present</p>
</div>
<p>
  • Built and optimized financial models for multiple MSW-to-Fuel plants. <br />
  • Conducted feasibility analyses and developed comprehensive financial forecasts for energy plant projects. <br />
  • Created and managed Gantt charts to streamline project timelines and resource allocation
</p>
</div>
<div>
<img class='logo' src='images/Mid Market logo.jpg' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>Mid-Market Securities LLC.</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Investment Banking Analyst</p>
  <p class='experience-details'>January 2023 - January 2024</p>
</div>
<p>
  • Developed a comprehensive financial model for BioCarbon Fuel LLC’s
  innovative project of converting municipal solid waste into
  sustainable aviation fuel. <br />• Collaborated effectively with
  multiple companies, successfully obtaining Letters of Intent (LOIs)
  from both offtakers and underwriters to support the project's growth
  and sustainability.
</p>
</div>
<div>
<img class='logo' src='images/best-buy-logo.jpg' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>Best Buy</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Seasonal Sales Associate</p>
  <p class='experience-details'>October 2023 - January 2024</p>
</div>
<p>
  • Interacted with customers directly on the sale floor and developed a deep understanding of the consumer tech industry. <br />
  • Consistently had the most revenue with the largest attachment basket in the PC department.
</p>
</div>
<div>
<img class='logo' src='images/Common Energy Logo.webp' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>Common Energy</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Business Development Intern</p>
  <p class='experience-details'>November 2021 - February 2022</p>
</div>
<p>
  • Presented Common Energy's business model to clients in
  presentations. <br />
  • Conducted market research to identify potential clients and
  partners. <br />
  • Assisted in business development and customer acquisition efforts.
</p>
</div>
<div>
<img class='logo' src='images/Hold Brothers Logo.png' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>Hold Brothers Capital LLC.</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Summer Analyst</p>
  <p class='experience-details'>May 2021 – August 2021</p>
</div>
<p>
  • Conducted comparable company analysis, precedent transaction
  analysis, discount cash flow analysis, and leveraged buyout analysis
  to assist senior bankers in pitching and executing M&A deals. <br />
  • Created pitch books and presented market research to clients. <br />
  • Coordinated with various teams and external stakeholders to ensure
  successful deal completion.
</p>
</div>
<div>
<img class='logo' src='images/NYCC logo.png' alt='' />
</div>
<div>
<div class='experience-title'>
  <p class='experience'>New York Communities for Change</p>
  <p class='experience'>New York, NY</p>
</div>
<div class='experience-title'>
  <p class='experience-details'>Data Analytics Intern</p>
  <p class='experience-details'>May 2018 – August 2018</p>
</div>
<p>
  • Gathered and analyzed data on capital flow for large fossil fuel
  companies. <br />
  • Collaborated with a team to push for New York City's divestment of
  fossil fuels. <br />
  • Developed and maintained a database to track the progress of
  divestment efforts.
</p>
</div>
`

edcuationinnerhtml = `<div>
<img
  class="logo"
  src="images/Colgate_University_Seal_2018.svg.png"
  alt=""
/>
</div>
<div>
<div class="experience-title">
  <p class="experience">Colgate University</p>
  <p class="experience">Hamilton, NY</p>
</div>
<div class="experience-title">
  <p class="experience-details">
    Bachelor of Arts in Mathematical Economics. Minor in Physics
  </p>
  <p class="experience-details">August 2018 - May 2022</p>
</div>
<p>
  Applied Macroeconomics, Adv. Microeconomic Theory, Money & Banking,
  Applied Econometrics, Advanced Macroeconomics, Number Theory & Math
  Reasoning, Colgate Investment Club.
</p>
</div>
<div>
<img class="logo" src="images/america-on-tech-full-logo.png" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">America on Tech</p>
  <p class="experience">New York, NY</p>
</div>
<div class="experience-title">
  <p class="experience-details">Student</p>
  <p class="experience-details">August 2017 - March 2017</p>
</div>
<p>
  •Completed winter semester course on advanced implementation of
  various markup and programming languages. <br />
  •Designed and presented Just Juice website to an audience of five
  hundred and won the competition.
</p>
</div>
<div>
<img class="logo" src="images/all star code logo.png" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">All Star Code</p>
  <p class="experience">New York, NY</p>
</div>
<div class="experience-title">
  <p class="experience-details">Student</p>
  <p class="experience-details">May 2016 - August 2016</p>
</div>
<p>
  •Engaged in an intensive coding program at All Star Code, gaining
  foundational knowledge in software development and programming. <br />
  •Acquired practical skills in front-end web development, while
  collaborating on hands-on projects and assignments.
</p>
</div>
<div>
<img class="logo" src="images/collegiate_logo.jpg" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Collegiate School</p>
  <p class="experience">New York, NY</p>
</div>
<div class="experience-title">
  <p class="experience-details">Class of 2018</p>
  <p class="experience-details">August 2012 - May 2018</p>
</div>
<p>
  Collegiate School is an independent school for boys in New York City.
  It is located on the Upper West Side of Manhattan and is a member of
  both the New York Interschool and the Ivy Preparatory School League.
</p>
</div>
<div>
<img class="logo" src="images/prep for prep.png" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Prep for Prep</p>
  <p class="experience">New York, NY</p>
</div>
<div class="experience-title">
  <p class="experience-details">Contingent XXXIV</p>
  <p class="experience-details">May 2011 - August 2012</p>
</div>
<p>
  A highly selective leadership development program that incorporates a
  rigorous 14-month academic component to prepare students for placement
  in leading independent school and continues to work closely with them
  through high school and beyond.
</p>
</div>`

skillsinnerhtml =  `<div>
<img
  class="logo"
  src="images/Python-logo.png"
  alt="Python"
/>
</div>
<div>
<div class="experience-title">
  <p class="experience">Python</p>
  
</div>
<div class="experience-title">
</div>
<p>
  I have extensive experience using Python to streamline workflows, automate repetitive tasks, and develop backend systems for a variety of applications. F
  or example, I designed and implemented a backend system for an e-commerce site using Python, leveraging frameworks like Flask and Django to create scalable and secure APIs, manage databases, and integrate payment gateways. Additionally, I automated the monthly update process for a financial Excel model by writing Python scripts that fetch the latest commodity prices from external sources and update the model using libraries like pandas and openpyxl. I also automated the generation of associated executive summaries and presentations by integrating python-pptx and docx libraries, saving significant time and reducing manual errors. Beyond financial modeling, I developed a Python script using Selenium to automate the process of filling out job applications on the Workday website, navigating web forms and handling dynamic elements to streamline the application process. My work has involved extensive use of libraries such as Selenium for web automation, pandas and NumPy for data manipulation and analysis, openpyxl and XlsxWriter for Excel automation, and python-pptx and docx for automating PowerPoint and Word documents. These projects highlight my ability to leverage Python to solve complex problems, automate workflows, and deliver innovative, efficient solutions across diverse domains.
</p>
</div>
<div>
<img class="logo" src="images/Excel-Logo.png" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Microsoft Excel</p>
</div>
<div class="experience-title">
</div>
<p>
  I have extensive experience using Microsoft Excel for financial analysis, modeling, and data-driven decision-making. As an Investment Banking Analyst, I utilized Excel to analyze market trends, perform valuations using methodologies such as discounted cash flow (DCF) and comparable company analysis, and create detailed financial models to support investment recommendations. At BioCarbon Fuels (BCF), I built financial models from scratch to evaluate project feasibility, forecast cash flows, and assess profitability, while also updating and refining pre-existing models to reflect new data and scenarios. I am highly proficient in Excel formulas, functions, and advanced features such as pivot tables, data validation, and conditional formatting. Additionally, I am comfortable navigating Excel both through the program itself and by automating tasks using Python, which allows me to streamline workflows and enhance efficiency. My ability to create, edit, and optimize financial models demonstrates my strong analytical skills and adaptability in leveraging Excel for complex financial analysis.
</p>
</div>
<div>
<img class="logo" src="images/microsoft-word-logo.jpg" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Microsoft Word</p>
</div>
<div class="experience-title">
</div>
<p>
  During my role as an Investment Banking Analyst, I used Microsoft Word extensively to create comprehensive industry research reports, leveraging both pre-existing templates and building documents from scratch to meet specific needs. These reports involved in-depth analysis of market trends, financial data, and competitive landscapes, which I presented in a clear, structured, and visually appealing format. I also customized templates to streamline the report-writing process, ensuring consistency and efficiency across deliverables. Additionally, I applied these skills at BioCarbon Fuels, where I wrote executive summaries and project reports, tailoring content to highlight key insights and recommendations for stakeholders. My ability to work with and create templates, combined with my attention to detail and strong analytical writing, allowed me to produce professional, high-quality documents that effectively communicated complex information.
</p>
</div>
<div>
<img class="logo" src="images/PowerPoint-logo.png" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Microsoft Powerpoint</p>
</div>
<div class="experience-title">
</div>
<p>
  During my time at Hold Brothers Capital, I used Microsoft PowerPoint to create professional and visually compelling pitch books for client presentations. These pitch books were designed to clearly communicate complex financial data, investment strategies, and market insights, ensuring they were both informative and engaging for stakeholders. Additionally, I utilized PowerPoint to develop detailed presentations for Biocarbon Fuels, where I illustrated the types of equipment used in the conversion process and explained the entire workflow from municipal solid waste (MSW) to fuel. These presentations were critical for conveying technical information in an accessible and visually appealing manner. 
</p>
</div>
<div>
<img class="logo" src="images/stata.svg" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">Stata</p>
</div>
<div class="experience-title">
</div>
<p>
  For my Macroeconomics Thesis in my senior year, I used Stata extensively to examine the impact of private schooling on earnings,
  using data from the Panel Study of Income Dynamics (PSID) to explore how private education influences income levels and whether these effects vary by race and sex.
  In this study, Stata played a central role in managing, cleaning, and analyzing the data from the Panel Study of Income Dynamics (PSID). One of the first steps was restructuring the dataset to make it suitable for analysis. The original PSID data contained dozens of year-specific wage variables, with each row representing a single individual and columns for each year’s wage data. To convert this into a more usable format, I used Stata’s reshape command. This transformed the data from a wide format (one row per person) to a long format (multiple rows per person, with each row representing a person-year observation). Additionally, I renamed the wage variables to make them more intuitive and easier to work with during the analysis. This restructuring was critical for creating a single wage variable and organizing the data into person-year rows, which allowed for a more flexible and detailed analysis over time.

After reshaping the data, I used Stata for extensive data cleaning. This involved removing outliers, such as the top and bottom 1% of wage values, and dropping observations with missing or negative wage data. Stata’s commands, such as drop, keep, and generate, were essential for filtering the dataset and creating new variables, including age squared, which was later used in the regression models. I also used Stata’s summarize command to generate descriptive statistics for key variables, such as log wages, private schooling status, age, education level, and parental education. This provided a clear overview of the dataset’s distribution and characteristics before proceeding with the regression analysis.

For the statistical analysis, Stata’s regress command was used to run multiple regression models. The primary model regressed log wages against private schooling status while controlling for variables like education, parental education, age, and age squared. I also ran separate regressions for different demographic groups, such as men versus women and different racial groups, using the if qualifier to subset the data. Stata’s output tables were used to present the regression results, including coefficients, standard errors, and R-squared values, which were then formatted and exported for inclusion in the final paper. The ability to handle large datasets efficiently was another advantage of Stata, as the PSID dataset is both large and complex. Commands like collapse and merge were used to organize and combine data as needed, ensuring the analysis was both accurate and comprehensive.

Overall, Stata was indispensable for this study, from reshaping and cleaning the data to running regressions and interpreting results. Its flexibility and robust commands allowed me to rigorously test my hypotheses and draw meaningful conclusions about the impact of private schooling on earnings. The use of reshape was particularly important, as it enabled me to reorganize the data into a format that facilitated a more detailed and dynamic analysis over time. 
</p>
</div>
<div>
<img class="logo" src="images/htmlcssjs-logo.jpg" alt="" />
</div>
<div>
<div class="experience-title">
  <p class="experience">HTML | CSS | JS</p>
</div>
<div class="experience-title">
</div>
<p>
  I have extensive experience using HTML, CSS, and JavaScript to design and develop dynamic, user-friendly websites and web applications. For my personal portfolio website, I utilized HTML for structuring content, CSS for styling and responsive design, and JavaScript to add interactivity and enhance the user experience. In another project, I built an e-commerce website by combining these front-end technologies with Django for the backend, creating a seamless integration of user interfaces, database management, and payment processing. Additionally, during my time with American on Tech, I co-developed a web application called Locus, a social media platform that allowed users to post photos tagged with geographic locations on an interactive map. This project involved using JavaScript to integrate mapping APIs, HTML and CSS to design the interface, and Django to handle user authentication, photo uploads, and location data storage. These experiences demonstrate my ability to leverage front-end technologies alongside backend frameworks to create innovative, functional, and visually appealing web solutions.
</p>
</div>`

function rightButton() {
  let sectionTitle = document.getElementById("section-title");
  if (sectionTitle.innerHTML === 'Education') {
    sectionTitle.innerHTML = 'Work Experience'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = workxpinnerhtml
  }
  else if (sectionTitle.innerHTML === 'Skills')  {
    sectionTitle.innerHTML = 'Education'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = edcuationinnerhtml
  }
  else if (sectionTitle.innerHTML === 'Work Experience') {
    sectionTitle.innerHTML = 'Skills'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = skillsinnerhtml
  }

}

function leftButton() {
  let sectionTitle = document.getElementById("section-title");
  if (sectionTitle.innerHTML === 'Education') {
    sectionTitle.innerHTML = 'Skills'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = skillsinnerhtml
  }
  else if (sectionTitle.innerHTML === 'Skills')  {
    sectionTitle.innerHTML = 'Work Experience'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = workxpinnerhtml
  }
  else if (sectionTitle.innerHTML === 'Work Experience') {
    sectionTitle.innerHTML = 'Education'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = edcuationinnerhtml
  }
}