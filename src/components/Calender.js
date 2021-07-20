import React, { useEffect, useRef, useState } from "react";

const Calender = ({ setDateObj, dateObj }) => {
  const [initi, setIniti] = useState(null);
  const [init, setInit] = useState(false);
  const [calDate, setCalDate] = useState();
  const [calDay, setCalDay] = useState();
  const [calMonth, setCalMonth] = useState();
  const [calYear, setCalYear] = useState();
  const calBody = useRef();

  const loadDate = (date, dayIn) => {
    setCalDate(date);
    setCalDay(dayIn);
  };

  const ddd = {
    monList: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    today: new Date(),
    activeDate: dateObj,
    monForChange: dateObj.getMonth(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(this.monForChange + 1);
      this.monForChange = this.monForChange + 1;
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(this.monForChange - 1);
      this.monForChange = this.monForChange - 1;
      this.activeDate = d;
      return d;
    },
    clickDate: function (click) {
      let d = new Date();
      d.setDate(click);
      d.setMonth(this.monForChange);
      setDateObj(d);
      return d;
    },
    addZero: (num) => (num < 10 ? "0" + num : num),
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };

  function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();

    let firstDay = initi.getFirstDay(yy, mm);
    let lastDay = initi.getLastDay(yy, mm);

    let markToday;

    if (mm === initi.today.getMonth() && yy === initi.today.getFullYear()) {
      markToday = initi.today.getDate();
    }

    setCalMonth(initi.monList[mm]);
    setCalYear(yy);

    let trtd = "";
    let startCount;
    let countDay = 0;

    for (let i = 0; i < 6; i++) {
      trtd += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += "<td>";
        } else {
          let fullDate =
            yy +
            "." +
            initi.addZero(mm + 1) +
            "." +
            initi.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += markToday && markToday === countDay + 1 ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += startCount ? ++countDay : "";
        if (countDay === lastDay.getDate()) {
          startCount = 0;
        }
        trtd += "</td>";
      }
      trtd += "</tr>";
    }

    calBody.current.innerHTML = trtd;
  }

  const clickNextMonth = (event) => {
    loadYYMM(initi.nextMonth());
  };

  const clickPrevMonth = (event) => {
    loadYYMM(initi.prevMonth());
  };

  const clickCalender = (event) => {
    if (event.target.classList.contains("day")) {
      if (initi.activeDTag) {
        initi.activeDTag.classList.remove("day-active");
      }

      let day = Number(event.target.textContent);
      loadDate(day, event.target.cellIndex);

      event.target.classList.add("day-active");

      initi.activeDTag = event.target;
      initi.clickDate(day);
    }
  };

  useEffect(() => {
    setIniti(ddd);
    if (!init) {
      setInit(true);
    }
    if (initi !== null) {
      loadYYMM(initi.today);
      loadDate(initi.today.getDate(), initi.today.getDay());
    }
  }, [init]);

  return (
    <div class="container dp_none">
      <div class="my-calendar clearfix">
        <div class="clicked-date">
          <div class="cal-day">
            {init ? initi.dayList[calDay] : "initialize..."}
          </div>
          <div class="cal-date">{calDate}</div>
        </div>
        <div class="calendar-box">
          <div class="ctr-box clearfix">
            <button
              type="button"
              title="prev"
              class="btn-cal prev"
              onClick={clickPrevMonth}
              style={{ width: "100px", height: "100px" }}
            ></button>
            <span class="cal-month">{calMonth}</span>
            <span class="cal-year">{calYear}</span>
            <button
              type="button"
              title="next"
              class="btn-cal next"
              onClick={clickNextMonth}
              style={{ width: "100px", height: "100px" }}
            ></button>
          </div>
          <table class="cal-table">
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody
              class="cal-body"
              ref={calBody}
              onClick={clickCalender}
            ></tbody>
          </table>
        </div>
      </div>
      <div class="closeCld">❌</div>
    </div>
  );
};

export default Calender;
