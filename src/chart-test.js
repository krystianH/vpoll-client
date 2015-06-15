import {updateChart, setupChart} from './barchart';

export default function chartTest(barChart,chartCmp) {
	setTimeout(() => {
  		setupChart(barChart, chartCmp, getSampleCreate());
  		chartCmp.show();
  		setInterval( () => updateChart(barChart, chartCmp, getSampleUpdate()), 1000 );
	},2000);
}

function getSampleCreate() {
  return {
    "type": "createPoll", 
    "title": "Sample question", 
    "queries": [ 
        {
            "id": "1",
            "text": "Option 1",
        },
        {
            "id": "2",
            "text": "Option 2",
        }
    ]
  };
}

function getSampleUpdate() {
  return {
    "type": "respPoll", 
    "responses": 
        {
            "id": (Math.round(Math.random())+1).toString() //randomize value [1,2]
        }
  };
}