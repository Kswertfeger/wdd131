// register.js
// Kaleb Swertfeger

let participantCount = 1;

document.getElementById('add').addEventListener('click', () => {
  participantCount++;
  const participantHtml = participantTemplate(participantCount);
  document.getElementById('add').insertAdjacentHTML('beforebegin', participantHtml);
});

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select name="grade${count}">
          <option value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

document.querySelector('form').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const info = {
    adultName: document.getElementById('adult_name').value,
    participants: participantCount,
    totalFees: totalFees(),
  };

  const summaryHtml = successTemplate(info);
  document.getElementById('summary').innerHTML = summaryHtml;
  document.querySelector('form').classList.add('hide');
}

function successTemplate(info) {
    return `
      <div>
        <h2>Registration Complete</h2>
        <p>Thank you, ${info.adultName}, for registering ${info.participants} participant(s).</p>
        <p>Total Fee: $${info.totalFees}</p>
      </div>
    `;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
  
    const total = feeElements.reduce((sum, feeElement) => {
      return sum + (parseFloat(feeElement.value) || 0);
    }, 0);
  
    return total;
  }
  