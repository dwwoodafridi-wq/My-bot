// MB TRADER jaisa simple bot - For Education
(function(){
  // Agar pehle se khula hai to hata do
  let old = document.getElementById('my-bot-panel');
  if(old) old.remove();

  // 1. Panel ka Design
  let panel = document.createElement('div');
  panel.id = 'my-bot-panel';
  panel.style = 'position:fixed;top:80px;left:20px;z-index:99999;background:#1a1a2e;color:white;padding:15px;border-radius:10px;width:250px;font-family:sans-serif;border:2px solid #00ff88';
  
  panel.innerHTML = `
    <h3 style="margin:0 0 10px 0;color:#00ff88;text-align:center">MY BOT PRO</h3>
    <label>Round Number (0-9):</label><br>
    <input id="roundNum" type="number" value="5" style="width:100%;padding:5px;margin:5px 0"><br>
    <label>Time Second (5-60):</label><br>
    <input id="timeSec" type="number" value="5" style="width:100%;padding:5px;margin:5px 0"><br><br>
    <button id="startBot" style="width:48%;padding:8px;background:#00ff88;border:none;border-radius:5px;font-weight:bold">START</button>
    <button id="stopBot" style="width:48%;padding:8px;background:red;color:white;border:none;border-radius:5px">STOP</button>
    <p id="status" style="margin-top:10px;font-size:12px;text-align:center">Status: Ready</p>
  `;
  document.body.appendChild(panel);

  let interval = null;
  // 2. START logic
  document.getElementById('startBot').onclick = function(){
    let target = document.getElementById('roundNum').value;
    let sec = document.getElementById('timeSec').value * 1000;
    document.getElementById('status').innerText = 'Status: Running... Target ' + target;
    
    interval = setInterval(function(){
      // Quotex ka price lena - ye har site par alag hota hai
      let priceElement = document.querySelector('.current-price, [class*="price"]');
      console.log('Bot check kar raha hai... Target:', target);
      
      // Yahan se actual BUY/SELL button par click hota hai
      // Example: document.querySelector('.btn-buy').click()
      
    }, sec);
  };

  document.getElementById('stopBot').onclick = function(){
    clearInterval(interval);
    document.getElementById('status').innerText = 'Status: Stopped';
  };
})();
