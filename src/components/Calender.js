import React, { useEffect, useRef, useState } from "react";

const Calender = () => {
  const [initi, setIniti] = useState(null);
  const [init, setInit] = useState(false);
  const [calDate, setCalDate] = useState();
  const [calDay, setCalDay] = useState();
  const [calMonth, setCalMonth] = useState();
  const [calYear, setCalYear] = useState();
  const calBody = useRef();

  let ready_month;
  let ready_year;

  const loadDate = (date, dayIn) => {
    setCalDate(date);
    setCalDay(dayIn);
  };

  const ddd = {
    //월 리스트
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
    //요일 리스트
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    // 일
    today: new Date(),
    // 월
    monForChange: new Date().getMonth(),
    // 선택된 일
    activeDate: new Date(),
    // 현재 월의 첫요일
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    // 현재 월의 마지막 요일
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    //다음 달 정보
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(this.monForChange + 1);
      this.monForChange = this.monForChange + 1;
      this.activeDate = d;
      return d;
    },
    //이전 달 정보
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(this.monForChange - 1);
      this.monForChange = this.monForChange - 1;
      this.activeDate = d;
      return d;
    },
    //두자리 만들기
    addZero: (num) => (num < 10 ? "0" + num : num),
    //현재 활성화 된 날짜
    activeDTag: null,
    //인덱스 얻기
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };

  //입력받은 날짜의 달력 출력
  function loadYYMM(fullDate) {
    console.log(initi);
    // 입력받은 날의 연월
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();

    ready_year = yy;
    ready_month = mm;

    // 첫날, 마지막날
    let firstDay = initi.getFirstDay(yy, mm);
    let lastDay = initi.getLastDay(yy, mm);

    let markToday; // for marking today date

    // 입력받은 연월이 현재와 같다면 (현재로)
    if (mm === initi.today.getMonth() && yy === initi.today.getFullYear()) {
      markToday = initi.today.getDate();
    }

    setCalMonth(initi.monList[mm]);
    setCalYear(yy);

    // 한달 출력
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
      // changeDay(ready_year, ready_month + 1, day);
      loadDate(day, event.target.cellIndex);

      event.target.classList.add("day-active");
      initi.activeDTag = event.target;
      initi.activeDate.setDate(day);
      // reloadToDo();
    }
  };

  useEffect(() => {
    setIniti(ddd);
    if (!init) {
      setInit(true);
    }
    if (initi !== null) {
      //오늘의 달력을 그리고
      loadYYMM(initi.today);
      //오늘의 날짜를 출력해!
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
