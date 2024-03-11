import React from "react";
import bg from "../images/chart_bg.jpg";

export default function History() {
  
  return (
    <div >
      <div class="about_bg" style={{ backgroundImage: `url(${bg})` , backgroundAttachment: 'fixed'}}>
      <div
        class="about_container"
        style=
          {{height: '5rem',
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'}}
        
      ></div>
        
          <div class="col-md-12">
            <h1>History of the Institute</h1>
          
        </div>
      </div>
      

      <section class="welcome_about" style={{backgroundColor:'white'}}>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h2>History of NISD</h2>
                <p style={{textAlign: 'justify'}}>The humble beginnings of this pioneer institution in social work education commenced in 1952 when some leading citizens, 
                    a few non-governmental organizations and representatives of some government departments made a combined effort to establish the Ceylon Institute of Social Work.
                     This institution was re-named as the Sri Lanka School of Social Work and commenced Diploma in Social Work in 1964. In 1987 the University Grants Commission informed that Sri Lanka School of Social Work should be upgraded as an Independent Institution. Cabinet approved the 
                     cabinet paper to establish the National Institute of Social Development in 1989 in order to provide higher education in Social Work and the School was upgraded 
                     and re-named as the National Institute of Social Development by an Act of Parliament namely: the National Institute of Social Development Act no.41 of 1992.
                    <br/>
                </p>
                    
            </div>
            <div class="col-md-5">
                <img src="" class="img-fluid" alt="NISD"/>
            </div>
        </div>
        <p style={{textAlign: 'justify'}}> 
            In 1987 the University Grants Commission informed that Sri Lanka School of Social Work should be upgraded as an Independent Institution. Cabinet approved the 
            cabinet paper to establish the National Institute of Social Development in 1989 in order to provide higher education in Social Work and the School was upgraded 
            and re-named as the National Institute of Social Development by an Act of Parliament namely: the National Institute of Social Development Act no.41 of 1992.
            The Memorandum of Understanding (MoU) was signed between University of Colombo and NISD in 2003, following the suggestion of UGC to collaborate with a local
             University to commence the Bachelor of Social Work.
            In 2005, the Government of the Democratic, Socialist Republic of Sri Lanka, on the recommendation of the University Grants Commission, declared the National 
            Institute of Social Development as a degree awarding institution for the purpose of developing higher education leading to the conferment of the Bachelor’s 
            degree in Social Work, by order under Section 25 A of the Universities Act No.16 of 1978 published in the Gazette Extraordinary No.1395/15 of June 01 2005. 
            The Bachelor of Social Work degree program commenced in December 2005.
            The Master's Degree program in Social Work was approved subsequently by the University Grants Commission and to formalize the approval, the Government of the Democratic 
            Socialist Republic of Sri Lanka rescinded the previous (gazette) order of 2005 and declared the National Institute of Social Development as a degree awarding Institution 
            for the purpose of developing higher education leading to the conferment of the Bachelor of Social Work degree and the Master of Social Work degree by 
            order under section 25A of the Universities Act No. 16 of 1978 and published in the Gazette Extraordinary No. 1557/7 of July 07 2008.
            The Master’s program in Social Work, the first ever in Sri Lanka, commenced under the sponsorship of the Canadian International Development Agency (CIDA), implemented
            by the Queen’s University, Kingston, Canada in collaboration with the Ministry of Social Services and Social welfare. In September 2008, following this benchmark event, 
            the NISD held the preliminary meeting to discuss the proposal submitted by the Queens University of Kingston, Canada to commence a PhD program in Social Work. Following
            several deliberations on this proposal a planning committee has been put in place by the Governing Council, to initially draw a five year plan to develop the 
            human resources at the NISD.
            Since its commencement, the Bachelor of Social Work Degree programme had been conducted only in English medium and with the view to provide an opportunity for students 
            to follow this degree in their mother tongue, Diploma, Higher Diploma and Bachelor’s Degree in Social Work in Sinhala, Tamil and English medium was commenced in 2013.
        </p>
    </div>
</section>
    </div>
  );
}


