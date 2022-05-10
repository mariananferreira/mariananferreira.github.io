const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //Sections Active
  allSections.addEventListener("click", e => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach(btn => {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  });
}

//Toggle theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});
// }

PageTransitions();
//<!-- -----------------------Contact email------------------------------- -->
function sendmail() {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let subject = document.getElementById("subject").value;

  var templateParams = {
    subject: subject,
    from_name: name,
    message: message,
    from_email: mail
  };

  emailjs.send("service_xbstqxs", "template_uuglofh", templateParams).then(
    function (response) {
      console.log("Message successfully sent!", response.status, response.text);
      alert("Message successfully sent!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("subject").value = "";
    },
    function (error) {
      console.log("Failed to send the message, please try again", error);
    }
  );
}

//<!-- -----------------------Contact email------------------------------- -->

// <!-- -----------------------SKILLS------------------------------- -->

var chart = echarts.init(document.getElementById("main"));
var option = {
  tooltip: {},
  series: [
    {
      type: "wordCloud",
      gridSize: 4,
      sizeRange: [10, 90],
      rotationRange: [-90, 90],

      shape: "apple",
      width: "100%",
      height: "100%",
      drawOutOfBound: true,
      textStyle: {
        normal: {
          color: function () {
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(",") +
              ")"
            );
          }
        },
        emphasis: {
          shadowBlur: 10,
          shadowColor: "#333"
        }
      },
      data: [
        {
          name: "React.JS",
          value: 10000,
          textStyle: {
            normal: {
              color: "black"
            },
            emphasis: {
              color: "red"
            }
          }
        },
        {
          name: "Three.js",
          value: 6181
        },
        {
          name: "CSS",
          value: 4386
        },
        {
          name: "JavaScript",
          value: 4055
        },
        {
          name: "TypeScript",
          value: 3500
        },
        {
          name: "HTML",
          value: 3333
        },
        {
          name: "SASS",
          value: 2700
        },
        {
          name: "Next.js",
          value: 2500
        },
        {
          name: "Angular",
          value: 2333
        },
        {
          name: "",
          value: 1900
        },
        {
          name: "Node.JS",
          value: 1900
        },
        {
          name: "Java",
          value: 1800
        },
        {
          name: "PostgreSQL",
          value: 1500
        },
        {
          name: "MySQL",
          value: 1400
        },
        {
          name: "MongoDB",
          value: 1325
        },
        {
          name: "Bootstrap",
          value: 1300
        },
        {
          name: "Tailwind",
          value: 1250
        },
        {
          name: "REST",
          value: 1233
        },
        {
          name: "jQuery",
          value: 1000
        },
        {
          name: "Git",
          value: 900
        },
        {
          name: "Docker",
          value: 875
        },
        {
          name: "JWT",
          value: 850
        },
        {
          name: "Kubernetes",
          value: 850
        },
        {
          name: "npm",
          value: 833
        },
        {
          name: "Pega",
          value: 790
        },
        {
          name: "Appian",
          value: 775
        },
        {
          name: "",
          value: 700
        },
        {
          name: "Blender",
          value: 650
        },
        {
          name: "Express.js",
          value: 600
        },
        {
          name: "Springboot",
          value: 575
        },
        {
          name: "",
          value: 500
        },
        {
          name: "ES6",
          value: 500
        },
        {
          name: "Redux",
          value: 400
        },
        {
          name: "IBM BPM",
          value: 300
        },
        {
          name: "Python",
          value: 290
        },
        {
          name: "Material-UI",
          value: 280
        },
        {
          name: " ",
          value: 250
        },
        {
          name: "",
          value: 235
        },
        {
          name: "",
          value: 225
        },
        {
          name: "",
          value: 215
        },

        {
          name: "",
          value: 190
        },
        {
          name: "",
          value: 185
        },
        {
          name: "",
          value: 180
        },
        {
          name: "",
          value: 175
        }
      ]
    }
  ]
};

chart.setOption(option);

window.onresize = chart.resize;

// <!-- -----------------------SKILLS mobile------------------------------- -->

am4core.useTheme(am4themes_animated);
console.log(am4core);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.tooltipText = "{word}: {value}";
series.fontFamily = "Courier New";
series.maxFontSize = am4core.percent(30);

series.text = "React html css pega blender ";

console.log(series);
