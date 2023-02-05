import * as React from "react"
import Card from "./Card";
import CardContainer from "./CardContainer";
import Drop from "./Drop"

function DropdownSearchContainer() {
    const options = [
        { value: "AAH", label: "AAH- Art and Architectural History " },
        { value: "ACCT", label: "ACCT- Accounting " },
        { value: "AFLS", label: "AFLS- College of Agriculture, Forestry and Life Sciences " },
        { value: "AGED", label: "AGED- Agricultural Education " },
        { value: "AGM", label: "AGM- Agricultural Mechanization " },
        { value: "AGRB", label: "AGRB- Agribusiness " },
        { value: "AL", label: "AL- Athletic Leadership " },
        { value: "AMFG", label: "AMFG- Advanced Manufacturing " },
        { value: "ANTH", label: "ANTH- Anthropology " },
        { value: "ARAB", label: "ARAB- Arabic " },
        { value: "ARCH", label: "ARCH- Architecture " },
        { value: "ART", label: "ART- Art " },
        { value: "AS", label: "AS- Aerospace Studies " },
        { value: "ASL", label: "ASL- American Sign Language " },
        { value: "ASTR", label: "ASTR- Astronomy " },
        { value: "AUD", label: "AUD- Audio Technology " },
        { value: "AUE", label: "AUE- Automotive Engineering " },
        { value: "AVS", label: "AVS- Animal and Veterinary Sciences " },
        { value: "BCHM", label: "BCHM- Biochemistry " },
        { value: "BE", label: "BE- Biosystems Engineering " },
        { value: "BIOE", label: "BIOE- Bioengineering " },
        { value: "BIOL", label: "BIOL- Biology " },
        { value: "BMOL", label: "BMOL- Biomolecular Engineering " },
        { value: "BT", label: "BT- Biosystems Technology " },
        { value: "BUS", label: "BUS- Business " },
        { value: "CAAH", label: "CAAH- College of Architecture, Arts and Humanities " },
        { value: "CE", label: "CE- Civil Engineering " },
        { value: "CES", label: "CES- College of Engineering and Science " },
        { value: "CH", label: "CH- Chemistry " },
        { value: "CHE", label: "CHE- Chemical Engineering " },
        { value: "CHIN", label: "CHIN- Chinese " },
        { value: "COMM", label: "COMM- Communication " },
        { value: "COOP", label: "COOP- Cooperative Education " },
        { value: "CPSC", label: "CPSC- Computer Science " },
        { value: "CRP", label: "CRP- City and Regional Planning " },
        { value: "CSM", label: "CSM- Construction Science and Management " },
        { value: "CTE", label: "CTE- Career and Technology Education " },
        { value: "CU", label: "CU- Clemson University " },
        { value: "CVT", label: "CVT- Cardiovascular Technology " },
        { value: "DANC", label: "DANC- Dance " },
        { value: "DPA", label: "DPA- Digital Production Arts " },
        { value: "DSGN", label: "DSGN- Design Studies " },
        { value: "EAS", label: "EAS- East Asian Studies " },
        { value: "ECE", label: "ECE- Electrical and Computer Engineering " },
        { value: "ECON", label: "ECON- Economics " },
        { value: "ED", label: "ED- Education " },
        { value: "EDC", label: "EDC- Educational Counseling " },
        { value: "EDEC", label: "EDEC- Early Childhood Education " },
        { value: "EDEL", label: "EDEL- Elementary Education " },
        { value: "EDF", label: "EDF- Educational Foundations " },
        { value: "EDHD", label: "EDHD- Education and Human Development " },
        { value: "EDLT", label: "EDLT- Literacy " },
        { value: "EDSC", label: "EDSC- Secondary Education " },
        { value: "EDSP", label: "EDSP- Special Education " },
        { value: "EER", label: "EER- Environmental Engineering and Science " },
        { value: "ELE", label: "ELE- Executive Leadership and Entrepreneurship " },
        { value: "EM", label: "EM- Engineering Mechanics " },
        { value: "ENGL", label: "ENGL- English " },
        { value: "ENGR", label: "ENGR- Engineering " },
        { value: "ENR", label: "ENR- Environmental and Natural Resources " },
        { value: "ENSP", label: "ENSP- Environmental Science and Policy " },
        { value: "ENT", label: "ENT- Entomology " },
        { value: "ENTR", label: "ENTR- Entrepreneurship " },
        { value: "ESED", label: "ESED- Engineering and Science Education " },
        { value: "ETOX", label: "ETOX- Environmental Toxicology " },
        { value: "FCS", label: "FCS- Family and Community Studies " },
        { value: "FDSC", label: "FDSC- Food Science " },
        { value: "FIN", label: "FIN- Finance " },
        { value: "FNR", label: "FNR- Forestry and Natural Resources " },
        { value: "FOR", label: "FOR- Forestry " },
        { value: "FR", label: "FR- French " },
        { value: "GC", label: "GC- Graphic Communications " },
        { value: "GEN", label: "GEN- Genetics " },
        { value: "GEOG", label: "GEOG- Geography " },
        { value: "GEOL", label: "GEOL- Geology " },
        { value: "GER", label: "GER- German " },
        { value: "GW", label: "GW- Great Works " },
        { value: "HCG", label: "HCG- Health-Care Genetics " },
        { value: "HEHD", label: "HEHD- Health, Education, and Human Development " },
        { value: "HIST", label: "HIST- History " },
        { value: "HLTH", label: "HLTH- Health " },
        { value: "HON", label: "HON- Honors " },
        { value: "HORT", label: "HORT- Horticulture " },
        { value: "HUM", label: "HUM- Humanities " },
        { value: "IE", label: "IE- Industrial Engineering " },
        { value: "INNO", label: "INNO- Innovation " },
        { value: "INT", label: "INT- Career Center Internship Program " },
        { value: "IPM", label: "IPM- Integrated Pest Management " },
        { value: "IS", label: "IS- International Studies " },
        { value: "ITAL", label: "ITAL- Italian " },
        { value: "JAPN", label: "JAPN- Japanese " },
        { value: "JUST", label: "JUST- Criminal Justice " },
        { value: "LANG", label: "LANG- Language " },
        { value: "LARC", label: "LARC- Landscape Architecture " },
        { value: "LATN", label: "LATN- Latin " },
        { value: "LAW", label: "LAW- Law " },
        { value: "LIB", label: "LIB- Library " },
        { value: "LIH", label: "LIH- Language and International Health " },
        { value: "LIT", label: "LIT- Language and International Trade " },
        { value: "LS", label: "LS- Leisure Skills " },
        { value: "MATH", label: "MATH- Mathematical Sciences " },
        { value: "ME", label: "ME- Mechanical Engineering " },
        { value: "MGT", label: "MGT- Management " },
        { value: "MICR", label: "MICR- Microbiology " },
        { value: "MKT", label: "MKT- Marketing " },
        { value: "ML", label: "ML- Military Leadership " },
        { value: "MSE", label: "MSE- Materials Science and Engineering " },
        { value: "MUSC", label: "MUSC- Music " },
        { value: "NPL", label: "NPL- Nonprofit Leadership " },
        { value: "NURS", label: "NURS- Nursing " },
        { value: "NUTR", label: "NUTR- Nutrition " },
        { value: "PA", label: "PA- Performing Arts " },
        { value: "PAS", label: "PAS- Pan African Studies " },
        { value: "PCPC", label: "PCPC- Pearce Center for Professional Communication " },
        { value: "PES", label: "PES- Plant and Environmental Sciences " },
        { value: "PHIL", label: "PHIL- Philosophy " },
        { value: "PHSC", label: "PHSC- Physical Science " },
        { value: "PHYS", label: "PHYS- Physics " },
        { value: "PKSC", label: "PKSC- Packaging Science " },
        { value: "PLPA", label: "PLPA- Plant Pathology " },
        { value: "PORT", label: "PORT- Portuguese " },
        { value: "POSC", label: "POSC- Political Science " },
        { value: "PRTM", label: "PRTM- Parks, Recreation, and Tourism Management " },
        { value: "PSYC", label: "PSYC- Psychology " },
        { value: "REL", label: "REL- Religion " },
        { value: "RS", label: "RS- Rural Sociology " },
        { value: "RUSS", label: "RUSS- Russian " },
        { value: "SOC", label: "SOC- Sociology " },
        { value: "SPAN", label: "SPAN- Spanish " },
        { value: "STAT", label: "STAT- Experimental Statistics " },
        { value: "STS", label: "STS- Science and Technology in Society " },
        { value: "THEA", label: "THEA- Theatre " },
        { value: "WCIN", label: "WCIN- World Cinema " },
        { value: "WFB", label: "WFB- Wildlife and Fisheries Biology " },
        { value: "WS", label: "WS- Women’s Studies " },
        { value: "YDP", label: "YDP- Youth Development Program " }
      ];
    return (
      <div className="dropdown-search-container">
        <Drop
            isSearchable
            placeHolder="Select A Subject"
            options={options}
            onChange={(value) => saveVal(value)}
            id="drop"/>
        <input type="text" maxlength="4" id="CourseNum"></input>
        <button onClick={collectVals}>Search</button>
      </div>
    );
}

var value;
export var cardList = []
export var submitClicked = false;

function saveVal(subj){
  value = subj.value;
}

//call when button is pressed
function collectVals() {
  var courseNum = document.getElementById("CourseNum").value;
  if(courseNum < "0000" || courseNum > "9999" || !value){ //|| subj === ''){
    alert("No Subject Selected or Invalid Course Number");
  }
  else{
    console.log("clicked")
    submitClicked = true;
    //send to python
    // cardList.push(<Card name="Christopher Plaue" score="5" diff="5" percent="50%"/>)
    // CardContainer()
    // const elem = document.getElementById("cardContainerDivision");
    // elem.style.display = "block";
  }
}

export default DropdownSearchContainer;