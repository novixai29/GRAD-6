/* =========================================================
   GRAD-006 — FUTURE BLUEPRINT

   غيّر بيانات الزبون من هنا فقط
========================================================= */

const GRADUATION = {

  /* =========================
     Graduate
  ========================= */

  graduateName:
    "علي أحمد",

  degree:
    "بكالوريوس هندسة مدنية",

  faculty:
    "كلية الهندسة",

  department:
    "الهندسة المدنية",

  university:
    "جامعة الموصل",

  classYear:
    "دفعة ٢٠٢٧",


  /* =========================
     Project
  ========================= */

  projectId:
    "ENG-2027-006",

  phases: [

    {
      id:
        "foundation",

      title:
        "الأساس",

      subtitle:
        "بداية الرحلة الأكاديمية وتثبيت القواعد العلمية",

      percent:
        25
    },

    {
      id:
        "structure",

      title:
        "الهيكل",

      subtitle:
        "بناء المعرفة وتطوير المهارات الأساسية",

      percent:
        50
    },

    {
      id:
        "development",

      title:
        "التطوير",

      subtitle:
        "المشاريع العملية والتخصص والتطبيق",

      percent:
        75
    },

    {
      id:
        "inspection",

      title:
        "الفحص النهائي",

      subtitle:
        "استكمال المتطلبات والاختبارات والمشروع النهائي",

      percent:
        100
    }

  ],


  /* =========================
     Message
  ========================= */

  tagline:
    "اكتمل المشروع وحان وقت الاحتفال بالإنجاز",


  /* =========================
     Event
  ========================= */

  startAt:
    "2027-07-15T18:00:00+03:00",

  endAt:
    "2027-07-15T21:00:00+03:00",

  timeZone:
    "Asia/Baghdad",


  /* =========================
     Venue
  ========================= */

  venue:
    "قاعة الاحتفال الكبرى",

  address:
    "الموصل، نينوى",

  city:
    "الموصل",

  country:
    "العراق",


  /* =========================
     Links
  ========================= */

  mapsUrl:
    "",

  shareUrl:
    ""

};


/* =========================================================
   ELEMENTS
========================================================= */

const body =
  document.body;

const buildButton =
  document.getElementById(
    "buildButton"
  );

const consoleDot =
  document.getElementById(
    "consoleDot"
  );

const consoleMessage =
  document.getElementById(
    "consoleMessage"
  );

const projectStatus =
  document.getElementById(
    "projectStatus"
  );

const projectPercentage =
  document.getElementById(
    "projectPercentage"
  );

const projectProgressBar =
  document.getElementById(
    "projectProgressBar"
  );

const phasesList =
  document.getElementById(
    "phasesList"
  );

const blueprintName =
  document.getElementById(
    "blueprintName"
  );

const routePath =
  document.getElementById(
    "routePath"
  );

const nodePanelLabel =
  document.getElementById(
    "nodePanelLabel"
  );

const nodePanelTitle =
  document.getElementById(
    "nodePanelTitle"
  );

const nodePanelText =
  document.getElementById(
    "nodePanelText"
  );

const themeToggle =
  document.getElementById(
    "themeToggle"
  );

const themeLabel =
  document.getElementById(
    "themeLabel"
  );

const mapsButton =
  document.getElementById(
    "mapsButton"
  );

const calendarButton =
  document.getElementById(
    "calendarButton"
  );

const shareButton =
  document.getElementById(
    "shareButton"
  );

const shareFeedback =
  document.getElementById(
    "shareFeedback"
  );

const reducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


/* =========================================================
   STATE
========================================================= */

let projectRunning =
  false;

let projectComplete =
  false;


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initialize
);


function initialize() {

  applyData();

  buildPhases();

  setupDate();

  setupMaps();

  setupTheme();

  setupNodeButtons();

  setupBuildButton();

  setupCalendar();

  setupShare();

  prepareSvg();

  if (reducedMotion) {

    completeProjectImmediately();

  }

}


/* =========================================================
   DATA
========================================================= */

function applyData() {

  const fields = {

    graduateName:
      GRADUATION.graduateName,

    degree:
      GRADUATION.degree,

    faculty:
      GRADUATION.faculty,

    department:
      GRADUATION.department,

    university:
      GRADUATION.university,

    classYear:
      GRADUATION.classYear,

    projectId:
      GRADUATION.projectId,

    venue:
      GRADUATION.venue,

    tagline:
      GRADUATION.tagline

  };


  Object.entries(fields)
    .forEach(
      ([field, value]) => {

        document
          .querySelectorAll(
            `[data-field="${field}"]`
          )
          .forEach(
            element => {

              element.textContent =
                value || "—";

            }
          );

      }
    );


  blueprintName.textContent =
    GRADUATION.graduateName;


  document.title =
    `${GRADUATION.graduateName} — مخطط المستقبل`;


  const ogTitle =
    document.querySelector(
      'meta[property="og:title"]'
    );


  const ogDescription =
    document.querySelector(
      'meta[property="og:description"]'
    );


  if (ogTitle) {

    ogTitle.setAttribute(
      "content",
      `${GRADUATION.graduateName} — مخطط المستقبل`
    );

  }


  if (ogDescription) {

    ogDescription.setAttribute(
      "content",
      GRADUATION.tagline
    );

  }

}


/* =========================================================
   PHASES
========================================================= */

function buildPhases() {

  phasesList.innerHTML =
    "";


  GRADUATION.phases.forEach(
    (phase, index) => {

      const row =
        document.createElement(
          "article"
        );


      row.className =
        "phase-row";


      row.dataset.phase =
        phase.id;


      row.innerHTML = `
        <span class="phase-index">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <div class="phase-copy">

          <strong>
            ${escapeHTML(phase.title)}
          </strong>

          <span>
            ${escapeHTML(phase.subtitle)}
          </span>

        </div>

        <span class="phase-status">
          PENDING
        </span>
      `;


      phasesList.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   NODE BUTTONS
========================================================= */

function setupNodeButtons() {

  document
    .querySelectorAll(
      ".info-node"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const id =
              button.dataset.node;


            const phase =
              GRADUATION.phases.find(
                item =>
                  item.id === id
              );


            if (!phase) {
              return;
            }


            nodePanelLabel.textContent =
              "PROJECT NODE";


            nodePanelTitle.textContent =
              phase.title;


            nodePanelText.textContent =
              phase.subtitle;

          }
        );

      }
    );

}


/* =========================================================
   SVG
========================================================= */

function prepareSvg() {

  document
    .querySelectorAll(
      ".bp-line"
    )
    .forEach(
      line => {

        line.style.strokeDasharray =
          "1";


        line.style.strokeDashoffset =
          "1";

      }
    );


  routePath.style.strokeDasharray =
    "1";


  routePath.style.strokeDashoffset =
    "1";

}


/* =========================================================
   BUILD
========================================================= */

function setupBuildButton() {

  buildButton.addEventListener(
    "click",
    () => {

      if (projectRunning) {
        return;
      }


      if (projectComplete) {

        replayProject();

        return;
      }


      runProject();

    }
  );

}


/* =========================================================
   MAIN ANIMATION
========================================================= */

function runProject() {

  if (
    reducedMotion ||
    typeof gsap ===
      "undefined"
  ) {

    completeProjectImmediately();

    return;

  }


  projectRunning =
    true;


  buildButton.disabled =
    true;


  consoleDot.classList.add(
    "is-active"
  );


  consoleMessage.textContent =
    "جارٍ تنفيذ المخطط...";


  projectStatus.textContent =
    "قيد التنفيذ";


  const phaseRows =
    [
      ...document.querySelectorAll(
        ".phase-row"
      )
    ];


  const progressState = {
    value: 0
  };


  const timeline =
    gsap.timeline({

      defaults: {
        ease:
          "power2.inOut"
      },

      onComplete: () => {

        projectRunning =
          false;

        projectComplete =
          true;

        buildButton.disabled =
          false;

        buildButton
          .querySelector("span")
          .textContent =
            "إعادة تنفيذ المخطط";

      }

    });


  /*
    FRAME
  */

  timeline.to(
    ".main-frame",
    {

      strokeDashoffset: 0,

      duration: 0.7

    }
  );


  /*
    FOUNDATION
  */

  timeline.call(
    () => {

      updateConsole(
        "جارٍ تنفيذ مرحلة الأساس..."
      );

    }
  );


  timeline.to(
    ".foundation-path",
    {

      strokeDashoffset: 0,

      duration: 0.75

    }
  );


  timeline.to(
    progressState,
    {

      value: 25,

      duration: 0.5,

      onUpdate: () => {

        setProgress(
          Math.round(
            progressState.value
          )
        );

      }

    },
    "<"
  );


  timeline.call(
    () => {

      completePhase(
        phaseRows[0]
      );

    }
  );


  /*
    STRUCTURE
  */

  timeline.call(
    () => {

      updateConsole(
        "جارٍ بناء الهيكل..."
      );

    }
  );


  timeline.to(
    ".structure-path",
    {

      strokeDashoffset: 0,

      duration: 0.8

    }
  );


  timeline.to(
    progressState,
    {

      value: 50,

      duration: 0.5,

      onUpdate: () => {

        setProgress(
          Math.round(
            progressState.value
          )
        );

      }

    },
    "<"
  );


  timeline.call(
    () => {

      completePhase(
        phaseRows[1]
      );

    }
  );


  /*
    DEVELOPMENT
  */

  timeline.call(
    () => {

      updateConsole(
        "جارٍ تطوير المشروع..."
      );

    }
  );


  timeline.to(
    ".development-path",
    {

      strokeDashoffset: 0,

      duration: 0.8

    }
  );


  timeline.to(
    ".roof-path",
    {

      strokeDashoffset: 0,

      duration: 0.6

    },
    "-=0.35"
  );


  timeline.to(
    progressState,
    {

      value: 75,

      duration: 0.5,

      onUpdate: () => {

        setProgress(
          Math.round(
            progressState.value
          )
        );

      }

    },
    "<"
  );


  timeline.call(
    () => {

      completePhase(
        phaseRows[2]
      );

    }
  );


  /*
    FINAL INSPECTION
  */

  timeline.call(
    () => {

      updateConsole(
        "جارٍ إجراء الفحص النهائي..."
      );

    }
  );


  timeline.to(
    ".bp-node",
    {

      fill:
        "var(--success)",

      duration: 0.35,

      stagger: 0.08

    }
  );


  timeline.to(
    progressState,
    {

      value: 100,

      duration: 0.7,

      onUpdate: () => {

        setProgress(
          Math.round(
            progressState.value
          )
        );

      }

    }
  );


  timeline.call(
    () => {

      completePhase(
        phaseRows[3]
      );


      projectStatus.textContent =
        "اكتمل المشروع";

    }
  );


  /*
    NAME
  */

  timeline.to(
    ".bp-line",
    {

      opacity: 0.24,

      duration: 0.45

    }
  );


  timeline.to(
    blueprintName,
    {

      opacity: 1,

      duration: 0.25

    }
  );


  timeline.fromTo(
    blueprintName,
    {

      strokeDasharray:
        "8 8",

      fill:
        "rgba(98,229,255,0)"

    },

    {

      strokeDasharray:
        "1 0",

      fill:
        "rgba(98,229,255,0.08)",

      duration: 1,

      ease:
        "power1.inOut"

    }
  );


  /*
    ROUTE
  */

  timeline.to(
    routePath,
    {

      strokeDashoffset: 0,

      duration: 1.1,

      ease:
        "power1.inOut"

    }
  );


  timeline.call(
    () => {

      consoleDot.classList.remove(
        "is-active"
      );


      consoleDot.classList.add(
        "is-complete"
      );


      consoleMessage.textContent =
        "اكتمل المشروع بنجاح";


      nodePanelLabel.textContent =
        "FINAL STATUS";


      nodePanelTitle.textContent =
        "اكتمل المشروع";


      nodePanelText.textContent =
        "جميع المراحل الهندسية والأكاديمية اكتملت بنجاح";

    }
  );

}


/* =========================================================
   PHASE COMPLETE
========================================================= */

function completePhase(
  row
) {

  if (!row) {
    return;
  }


  row.classList.add(
    "is-complete"
  );


  const status =
    row.querySelector(
      ".phase-status"
    );


  status.textContent =
    "COMPLETE";

}


/* =========================================================
   PROGRESS
========================================================= */

function setProgress(
  value
) {

  const safeValue =
    Math.max(
      0,
      Math.min(
        100,
        value
      )
    );


  projectPercentage.textContent =
    `${safeValue}%`;


  projectProgressBar.style.width =
    `${safeValue}%`;

}


/* =========================================================
   CONSOLE
========================================================= */

function updateConsole(
  text
) {

  consoleMessage.textContent =
    text;

}


/* =========================================================
   COMPLETE IMMEDIATELY
========================================================= */

function completeProjectImmediately() {

  document
    .querySelectorAll(
      ".bp-line"
    )
    .forEach(
      line => {

        line.style.strokeDashoffset =
          "0";

      }
    );


  document
    .querySelectorAll(
      ".phase-row"
    )
    .forEach(
      row => {

        completePhase(
          row
        );

      }
    );


  blueprintName.style.opacity =
    "1";


  blueprintName.style.fill =
    "rgba(98,229,255,0.08)";


  routePath.style.strokeDashoffset =
    "0";


  setProgress(
    100
  );


  projectStatus.textContent =
    "اكتمل المشروع";


  consoleDot.classList.add(
    "is-complete"
  );


  consoleMessage.textContent =
    "اكتمل المشروع بنجاح";


  projectComplete =
    true;


  buildButton
    .querySelector("span")
    .textContent =
      "تم تنفيذ المشروع";

}


/* =========================================================
   REPLAY
========================================================= */

function replayProject() {

  projectComplete =
    false;


  consoleDot.classList.remove(
    "is-complete"
  );


  document
    .querySelectorAll(
      ".bp-line"
    )
    .forEach(
      line => {

        line.style.opacity =
          "1";


        line.style.strokeDashoffset =
          "1";

      }
    );


  document
    .querySelectorAll(
      ".phase-row"
    )
    .forEach(
      row => {

        row.classList.remove(
          "is-complete"
        );


        row
          .querySelector(
            ".phase-status"
          )
          .textContent =
            "PENDING";

      }
    );


  blueprintName.style.opacity =
    "0";


  blueprintName.style.fill =
    "rgba(98,229,255,0)";


  routePath.style.strokeDashoffset =
    "1";


  setProgress(
    0
  );


  projectStatus.textContent =
    "قيد التنفيذ";


  buildButton
    .querySelector("span")
    .textContent =
      "بدء تنفيذ المشروع";


  runProject();

}


/* =========================================================
   THEME
========================================================= */

function setupTheme() {

  const saved =
    localStorage.getItem(
      "grad006-theme"
    );


  if (
    saved ===
    "light"
  ) {

    body.classList.add(
      "light-mode"
    );


    themeLabel.textContent =
      "DARK";

  }


  themeToggle.addEventListener(
    "click",
    () => {

      body.classList.toggle(
        "light-mode"
      );


      const light =
        body.classList.contains(
          "light-mode"
        );


      themeLabel.textContent =
        light
          ? "DARK"
          : "LIGHT";


      localStorage.setItem(
        "grad006-theme",
        light
          ? "light"
          : "dark"
      );

    }
  );

}


/* =========================================================
   DATE
========================================================= */

function setupDate() {

  const date =
    new Date(
      GRADUATION.startAt
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return;

  }


  const month =
    new Intl.DateTimeFormat(
      "en",
      {
        month: "short",
        timeZone:
          GRADUATION.timeZone
      }
    );


  const day =
    new Intl.DateTimeFormat(
      "en",
      {
        day: "2-digit",
        timeZone:
          GRADUATION.timeZone
      }
    );


  const year =
    new Intl.DateTimeFormat(
      "en",
      {
        year: "numeric",
        timeZone:
          GRADUATION.timeZone
      }
    );


  const fullDate =
    new Intl.DateTimeFormat(
      "ar-IQ-u-nu-arab",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone:
          GRADUATION.timeZone
      }
    );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ-u-nu-arab",
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone:
          GRADUATION.timeZone
      }
    );


  document.getElementById(
    "ceremonyMonth"
  ).textContent =
    month
      .format(date)
      .toUpperCase();


  document.getElementById(
    "ceremonyDay"
  ).textContent =
    day.format(date);


  document.getElementById(
    "ceremonyYear"
  ).textContent =
    year.format(date);


  document.getElementById(
    "formattedDate"
  ).textContent =
    fullDate.format(date);


  document.getElementById(
    "formattedTime"
  ).textContent =
    time.format(date);


  document.getElementById(
    "fullAddress"
  ).textContent =
    [
      GRADUATION.address,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join("، ");

}


/* =========================================================
   MAPS
========================================================= */

function setupMaps() {

  mapsButton.href =
    getMapsUrl();

}


function getMapsUrl() {

  if (
    GRADUATION.mapsUrl &&
    GRADUATION.mapsUrl.trim()
  ) {

    return GRADUATION.mapsUrl;

  }


  const query =
    [
      GRADUATION.venue,
      GRADUATION.address,
      GRADUATION.city,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}


/* =========================================================
   CALENDAR
========================================================= */

function setupCalendar() {

  calendarButton.addEventListener(
    "click",
    downloadCalendar
  );

}


function downloadCalendar() {

  const start =
    new Date(
      GRADUATION.startAt
    );


  const end =
    new Date(
      GRADUATION.endAt
    );


  const title =
    `احتفال تخرج ${GRADUATION.graduateName}`;


  const location =
    [
      GRADUATION.venue,
      GRADUATION.address,
      GRADUATION.city,
      GRADUATION.country
    ]
      .filter(Boolean)
      .join("، ");


  const shareUrl =
    getShareUrl();


  const description =
    [
      GRADUATION.tagline,
      GRADUATION.degree,
      GRADUATION.university,
      shareUrl
        ? `رابط الدعوة: ${shareUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//FutureBlueprint//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@inviteus.party
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(start)}
DTEND:${formatICSDate(end)}
SUMMARY:${escapeICS(title)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(shareUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    "graduation-blueprint.ics";


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  URL.revokeObjectURL(
    url
  );

}


function formatICSDate(
  date
) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}/,
      ""
    );

}


function escapeICS(
  value = ""
) {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    )

    .replace(
      /\n/g,
      "\\n"
    );

}


/* =========================================================
   SHARE
========================================================= */

function setupShare() {

  shareButton.addEventListener(
    "click",
    shareInvitation
  );

}


async function shareInvitation() {

  const title =
    `${GRADUATION.graduateName} — مخطط المستقبل`;


  const text =
    `${GRADUATION.tagline} — ${GRADUATION.graduateName}`;


  const url =
    getShareUrl();


  try {

    if (
      navigator.share
    ) {

      await navigator.share({
        title,
        text,
        url
      });


      showShareFeedback(
        "تمت مشاركة الدعوة بنجاح"
      );


      return;

    }


    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      await navigator.clipboard.writeText(
        url
      );


      showShareFeedback(
        "تم نسخ رابط الدعوة"
      );


      return;

    }


    fallbackCopy(
      url
    );


    showShareFeedback(
      "تم نسخ رابط الدعوة"
    );

  } catch (error) {

    if (
      error?.name ===
      "AbortError"
    ) {

      return;

    }


    fallbackCopy(
      url
    );


    showShareFeedback(
      "تم نسخ رابط الدعوة"
    );

  }

}


function getShareUrl() {

  if (
    GRADUATION.shareUrl &&
    GRADUATION.shareUrl.trim()
  ) {

    return GRADUATION.shareUrl;

  }


  return window.location.href;

}


function fallbackCopy(
  text
) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}


function showShareFeedback(
  message
) {

  shareFeedback.textContent =
    message;


  clearTimeout(
    showShareFeedback.timer
  );


  showShareFeedback.timer =
    setTimeout(
      () => {

        shareFeedback.textContent =
          "";

      },
      3500
    );

}


/* =========================================================
   UTILITIES
========================================================= */

function escapeHTML(
  value = ""
) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}
