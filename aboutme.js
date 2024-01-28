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

function rightButton() {
  let sectionTitle = document.getElementById("section-title");
  if (sectionTitle.innerHTML === 'Education') {
    sectionTitle.innerHTML = 'Work Experience'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = `<div>
    <img class='logo' src='images/Mid Market logo.jpg' alt='' />
  </div>
  <div>
    <div class='experience-title'>
      <p class='experience'>Mid-Market Securities LLC.</p>
      <p class='experience'>New York, NY</p>
    </div>
    <div class='experience-title'>
      <p class='experience-details'>Investment Banking Analyst</p>
      <p class='experience-details'>January 2023 - Present</p>
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
  </div>`
  }
  else if (sectionTitle.innerHTML === 'Skills')  {
    sectionTitle.innerHTML = 'Education'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = `<div>
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
  <div><img class="logo" src="images/prep for prep.png" alt="" /></div>
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
  </div>`
  }
  else if (sectionTitle.innerHTML === 'Work Experience') {
    sectionTitle.innerHTML = 'Skills'
  }
}

function leftButton() {
  let sectionTitle = document.getElementById("section-title");
  if (sectionTitle.innerHTML === 'Education') {
    sectionTitle.innerHTML = 'Skills'
  }
  else if (sectionTitle.innerHTML === 'Skills')  {
    sectionTitle.innerHTML = 'Work Experience'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = `<div>
    <img class='logo' src='images/Mid Market logo.jpg' alt='' />
  </div>
  <div>
    <div class='experience-title'>
      <p class='experience'>Mid-Market Securities LLC.</p>
      <p class='experience'>New York, NY</p>
    </div>
    <div class='experience-title'>
      <p class='experience-details'>Investment Banking Analyst</p>
      <p class='experience-details'>January 2023 - Present</p>
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
  </div>`
  }
  else if (sectionTitle.innerHTML === 'Work Experience') {
    sectionTitle.innerHTML = 'Education'
    let sectionData = document.querySelector('.workexperience-grid')
    sectionData.innerHTML = `<div>
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
  <div><img class="logo" src="images/prep for prep.png" alt="" /></div>
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
  </div>`
  }
}