(function () {
  var GRADE_KEY = "btj-grade";
  var DEFAULT_GRADE = "5";

  var select = document.getElementById("grade");
  var label = document.getElementById("grade-label");

  function readGrade() {
    try {
      var saved = window.localStorage.getItem(GRADE_KEY);
      if (saved && Number(saved) >= 1 && Number(saved) <= 10) return saved;
    } catch (e) {
      // Storage can be blocked (private windows, strict settings). Fall back to the default.
    }
    return DEFAULT_GRADE;
  }

  function saveGrade(grade) {
    try {
      window.localStorage.setItem(GRADE_KEY, grade);
    } catch (e) {
      // Not saved, but the picker still works for this visit.
    }
  }

  function applyGrade(grade) {
    select.value = grade;
    label.textContent = "Grade " + grade;
  }

  applyGrade(readGrade());

  select.addEventListener("change", function () {
    applyGrade(select.value);
    saveGrade(select.value);
  });
})();
