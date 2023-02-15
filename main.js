const FRAME_HEIGHT = 1000;
const FRAME_WIDTH = 1000; 
const MARGINS = {left: 100, right: 100, top: 100, bottom: 100};

const data1 = [55000, 48000, 27000, 66000, 90000];

// Add a new frame for this new visualization
const FRAME1 = d3.select("#vis") 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 



const MAX_Y = d3.max(data1, (d) => { return d; }); 
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom
const Y_SCALE = d3.scaleLinear() // linear scale because we have 
// linear data 
  .domain([MAX_Y, 0]) 
  .range([0, VIS_HEIGHT]); 

FRAME1.selectAll("points")  
.data(data1)  
.enter()       
.append("circle")  
  .attr("cx", MARGINS.left)  
  .attr("cy", (d) => {return (Y_SCALE(d) + MARGINS.top);})
  .attr("r", 5)
  .attr("class", "point"); 

  FRAME1.append("g") // g is a "placeholder" svg
  .attr("transform", "translate(" + MARGINS.top + 
        "," + (MARGINS.top) + ")") //moves axis 
                                                // within margins 
  .call(d3.axisLeft(Y_SCALE).ticks(10)) // function for generating axis  
    .attr("font-size", '20px'); // set font size



 
