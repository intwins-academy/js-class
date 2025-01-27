 //একটি শিক্ষার্থীর ফলাফলের শিট তৈরি করুন এবং শুধুমাত্র জাভাস্ক্রিপ্টের if-else শর্ত ব্যবহার করুন। একটি টেবিল তৈরি করুন এবং ১০ জন শিক্ষার্থীর ফলাফলের একটি উদাহরণ দিন।

 let students = [
    { rollno: 1, name: "Rofique", marks: 850 },
    { rollno: 2, name: "Shofique", marks: 350 },
    { rollno: 3, name: "Tony", marks: 950 },
    { rollno: 4, name: "Rony", marks: 650 },
    { rollno: 5, name: "Jony", marks: 250 },
  ];

  function resultSheet(marks) {
    if (marks >= 900) {
      return "A";
    } else if (marks >= 800) {
      return "B";
    } else if (marks >= 600) {
      return "C";
    } else if (marks >= 400) {
      return "D";
    } else {
      return "F";
    }
  }

  const tbody = document.querySelector("#resultSheet tbody");
  students.forEach((result) => {
    const grade = resultSheet(result.marks);
    const row = `<tr>
    <td>${result.rollno}</td>
    <td>${result.name}</td>
    <td>${result.marks}</td>
    <td>${grade}</td>        
    </tr>
    `;
    tbody.innerHTML += row;
  });