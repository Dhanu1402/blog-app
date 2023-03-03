import './App.css';

function App() {
  return (
    <main className="p-10 max-w-screen-md my-0 mx-auto">
      {/* header section */}
      <header className="flex justify-between mb-16 mt-2 items-center">
        <a className="font-bold text-2xl">BloggingAdda</a>
        <nav className="flex gap-4">
          <a>Developers</a>
          <a>Login</a>
          <a>Register</a>
        </nav>
      </header>

      {/* showing blog section */}
      <div className="post gap-6 mb-10">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAClCAMAAADoDIG4AAABzlBMVEUmsZr///+U0dLt7e329vYJTFIbsJjl6+rw8PDOzc34+Pf8+Pnc6+uX1NVIgoUMrZQhpJAASVRWvaqw3NTJz9UAPUTCytKgs7ZsW0J9ubuPYjjp6en6pm/2kEMAREnB0NHKRkGopqc7Zmu+vr5qZ2jx5Nz9xx/H4uPGMyzioqD69O/UbGigxsf2tYvx9vrxiDq1rbD7uiJgsaLd3d3biobYenTnsrHMTUf61r6wusTpVwD1rCvT7ej40ZSg2c6Gz8HVnx3AmZphwrDzpgD89Ob1uljB5t+M0cT3y6yDxuBOXVrvgCp1kZRNdHml2tHHOjOsOzr66c74y4b2v2jzsT764br2wnDvdgCJp6n0rHvlxaz++e5nioz6262murz67dX84Zj813H6yUP95KP824P1vZL6tQPttx7qbSryqor5w1DerhzGmRn0v6frZBXfogDbr0fhv3LxllaJlJFqn7BmmaqZ0uvFt4V4hIOlgy5mf3HepTw7W0qYq81jgLZ7t9eGnMUpXWJYdJ9Wan4VeXBiiatSZHVWWUeWaT33jT7EIRnvzcpxra9xcnFKTk53jmG6jFv98bmtmHHsdkLJaCTGXAawREKbVVi6iouWSUdyUHs8AAAN7ElEQVR4nO2djV/bxhmAdcU+m8OpEjkuS0PsYOomOMENdQAD/shkI9vFhvJhYoqBtmlIkzbtCgljW5vUWbp1a9J1Xdts/+3uTpYsyZKxU/wDqfeEgBG2QA/vvffe6SQ4jsFgMBgMBoPBYDAYDAaDwWAwGAwGo8dAmeP+MWwD5Dkx7ZekhYzArHUEL6RjoEEywzFphwFhHgENSYE/7h/phAOhBPSgDHPWloaxpdTycmoJMWeHw6eJpMpcdnVlBb+ryM4Els8sgSJRlMou53CAodxydlnOZ0yZJTBJjVWUPLbUcJZhziyAAtVUAdGmM6ovybKZBbwf65lbA4WbkVqpVitVXw0tr9I+QDjuH+1EYNLWSLvMZZfA+vx7pepgqVoqhbbxp6xlkhERz9P/xi/gqr8yuwF2L4yVatVSbasWAqubRNkCbN0D4bcxoII8zEg+rCEm5TlDjsJbN1cBGNyqVuW3EJhLEWV+Xr8H0U/2gJJ4D86XBjntgMivlQYVZVXcJMlbtaQokzThBGFGswfJqN1xQCFpHA5RGRDHTlruI3MA6yK5DBPamG2Us+QZpnsAeWc7gyICBtI8mR0TYhk+48O5DDuKlXB3SbpMnMuWstu0ykhyfFLiiTchZtyD38nOTIyRKMlkoIDyEPJkgLk2h7ZCW40338ocfY6IuwsfVrbACSZ7SDvXGeR8xqMlAsQY4ugULMzgz3KzqeaXN+Ug89FXQz4P0knjHgjOrUH4Bc1hbmxsV97/4MNtMiWmjruJ0ko2pUTSZnZNH0YiyXcoaow033EdUc9pNCqUW7r10QcfvknYIWWXOrsD8+TrldnVzdzGxkZlLju7uoE3xJQdQFK5gfXC7duFRCQabTpzaheA2xXYVmVR7ux8BDQzFZCOy0FueTY7i9+WN+eyKZ1S0nLBbqGApREKCWyO/B6Sx3VMPYb4uLXzpoY74+P3gHZCDAoeudVuVypLOMDQ0vIG8KuZivYP0SEUjUYSxNsYebcewRudOqWG46GyM35Ha2z8Hml5onrAijMN/mYZy5N2GRmimxOoYW4o59gOgE7tbO+Mq86IsfFxcsB5TW1vrFTTTWN0eAASY3T7x3flr6MhktMWHJnMqLINYumOLO1zqmwbGAormNGUIpL+BBPZVCiQ99GPZxL0GdFd+jznKgP3qKdPsLFP6KOdSosynhOlJALIl1wQdKNuOcrGSO4CkZmZGdplyu3Umco4qmxth5q68cmnN2iU7dwyyUSQmoLQOE0ByR7Wc7R5zszcB8126tQBAEnet6iyz298+ukNzJ3xnQ+66O94H8ldtLq7/1lEbrq3aTt1ZvqXS4QKUXajyef3NKXqoXvwk9yVSCzlQEQZAdAaA/Xy5z5G6Ck30mUquv7wxeZSrptERPYQoZXsmFrG0g7ToamMo0PIHG6UWFaqsr2hdoud16E8rkBIMXZ7bH2skMDlf6FAO0zRme0SHzAe72xsamWBLns7+dwwLcdyS4kECbZdRweZnM2M+LpZD0XP22mIRnDLjjn4nJ1cmunpcsVFy8ogZwcZDifJOMkY6zIN4V0YnSedOvVDwcVpWjc/KHW/4q51zZ5zjUER4ZDiBT9S40N8mdOQeA/qdEcyg0ftUHLsfJnoI62QjCEXpKTkzwgved6Wrj/W7AH6paP9SU8KmhEjpAsMfk0tJa8wUGcmOYc1Tnn5BRSk3k2d8mk/OUnljEUaPC9k8uk8bkKZHo6doQ9BTsyn0xnR7qs0eC6vVBWe9Evl+s6AXEaZzEX+l02RJwJeu+AEoJ5NavGirtyTbHt9Resa/h7VAnze8H18dr2+wmRsk+zF719eMqQfEdjzJJ1uBB3fey63maP/9fOZFmNdzFqeJGDzSFwjBw+KtTh9fOTjQWi2FsimQ3UlI8f3ag+Kxf3iXuPXf8RNxjgdpGC/WcfGZGDfSOkh9rX1RbFYdtEtR91t0rOjlVQqVdHPXEq2U0amnEmAPcbxVSz+MXtu/8EIPRTf0R4KWSy0OZslzKZ0TdR+847kxx95SHzt439X8ceDXhwK7pYr2VmZ7JxWmd3O08nzr321/aIsjdDoAI44yfjA2qzCn/5cLteq8rfRLBiyB41UtvcY2/Ltx3zF/f3i471e/PYRSGVnl1dW5lb/8uWZoNsdDARLXjsms4ayOMn9ZEGsj4aZtyfKcqvZlbnUSqp8xi0TKCP7KgMHOLxiZ11fPXr0uFh8ONIDZTEAtldxHsvOkhCj/9yBLRsq4xrnkkYeFPe/evT1I8zD8jsHPchlpGeem11bm1spBwOh+la9hJUNgtbrnk48UL6ioa9W/PoJ9vXkr+8Q4i3Dv9Mvgfb15NRoVC7JPO5A2F1zV3GceexYyypnefeK3zx68oT6euegHxkvR316pnvcWmeacRnw1AKBQDAYrIeAHVe2KGd54w+/+ZssbPi83GHqlblf75Jv/35GF2actn71hAbLgTDdYsPLdOT16AAdNAJMHi4Zr2p46n5rd6gj5udvYvC7b/XKWqZ+QjW5YrZbu2yG2UgzwEyS/1P3fAQczmvT0fmbicR6bje3/rohylqv8iHYclljYx7Le9CvOxJyFqgJVrbdgTJ0tn/+ZiExFLmwPYSVaffA8yYLPex6nwiT2VKcYCSPhlgt+NY/LnQEaZjzcsMMaXfhy/BiqzGbzv7DlvlSHGPpAZeGgVLwd93yZTCk24eL4wVD27Tv+RJ8LNrp/6TIc7xfd7ioFHQrwxzMGfkTeQspJ8iHYJB+omw74w6GdMZc5C5nfk2/6bP1TYIgL/h95GhQTKKnMU2UaanX63hDnT4Ol910CFQOu/VPalVGVmmkk9RaLJmBdjbG0dUFIpAEobEiQ1aGUONogV5ZcAt4S4FwrIwf43LUUw4GyVDeEzYoU7QPKMrInnlOEHHad8TqDCg0UwtV5rmkUtMrC2FwKVp2B0Lecj3kDdZjoXp5y6DsavP1SFVGvhEv2rAaM0N7H0qqzPeKyqsGZQgMEmXBICoFgnVQLoN6vVYr65WdU19+yqVVxjkjxAjJ5nVsBmWnjMpCVVcdKwsEXNVAoAzCZWzNA+L6Z507pb5eF2X4O9lt9toKJHWszLMFwmG0VQpUwWDJGwq4457qIKh2qsyOI8vDOETZYDxeCoaxuGCw6vFu4U04oXmqunbZRpk2a9obaEj/lsqwDlKFye/ccm2hfOxImRNW5BH4hebcVauyYKBLrJXBPHJIlPHp5oxPi7JALdQl1srwoPZ4jvDo0bSXVmWD7WYwXjPZFm7TMB0SZLob4lkqWxrTcVseM06jgaiWgShA1socZAwCn9L3WypL6CZnd+UbO4DpyX9e1nFxwFoZFEHaMc4W0u2UIS8hpoduQ9ORUQOoTZQJPtudVbKkeVGDtTIz0LQyfldp1zB/3dUXJwuYUX79psqMWpp+plGfgXbKxGM7wKOnmczMlLmMWlRwlBkDz1oZTmUOuifLYVGGmrh0BQWOss6VcQv2W4VnjXqRl2mUnSeokaVX1kWUOWbmh8Knk7A5K2tWZOQSetQo6zSXQdHGJ0lM4KXGMNO6Lpt/S8sF1BJljSZrpQyPlpzULjGNS2RMldEkFtVDt3WjDDqqwyRA+YCsc5kZaPq7KxM6rltV/86ZKlMR5ArAOsoQMnmAlRnot4oyZLtVi4ci0TqjXZQBpAQXUKPMmP6Hh0fCgWfPFGkaZVLeccrkS8FN67I2UWYoMlzD8edvfL83fGCMMrNb4dseKCbxsXUYZX3NKNM7O/+8f3jkfLy/dkqnDKYXjvv4egCk15a3qf5xj6g+kDe5jNU/LnRHRujaq4NzOmW8z37rPDsA0nsMdB1lujEn2Dt4g5Ya8WenNMrsvgqjDfm2Mxk4yowP9LkMKxse9srKqlplonPmyfTAPMi3m8kASA0mdSajZeY/vkcb5rWaVpkzmyXFPMracN5kW3APxZ/XtD0m+YMBx31ovQJygtSirO+1bjjrCge+r72irctsfzeRdkABkCVhBmVnu8IVDj7TV//2vI68Y9LJFmXtGqYJrQMmybnNktBlLgPfXTdgNix3dJBZK0v6/Y3LUXTnSyYvL+q4GG1zusSZWChLivzp07xIpLl009aTixcxi1MTExcpU0yZrCzJ/ev+/fUfeHJxpe58U0PZ6Oj10ckrTJlGmXj67sa/C4UfyXUimrNNeJBJlC1ev7545fLFySmmTFWGg+zu0vtj0fd4mARe7bQsVTaF30UnFq+MLjJlqjL448xn/7kbXed5Cbj06R9rIq4GBqYWJ5kyjbKfZgg/kz+R1pr+SZQN4LbJlDWV+Tj+M6LsJwh9wNuS/hdHJxYnFi+zXKZL//BnWRm5tE6b/xs95uTo1JXvJhaZsqYyJPD8D1gZuU68Nf3jOLsyen1qkRUZ2lIWZUic3Y21Vv/v/vKull+YsuYYM9L4ayT69H/txX9f/J7y4n+EF31M2WEzGTSlDdAzdfTTdkvynElbZZY3fNgttJv8+Q0qU7KXN2JJtKO1ss6ku7WyJvyGlCl3tfDjvNTximwTAAgHtMowgnLLjOM+xiPm7QZX4/F46KpKLTx4Pm6B+QKqeK1cbb6ePE/Z9dvHfYxHi3BNYRhzTctwl7S8WHk86KwwE/o7YOQNK5538vKrDlM20EGeio9Y0kmau+QsZVA3QWGFtY5OXuyw68p5f0fOfg1exxUbl3rszOu4hZ+Qy/s8PeRSD/8yyrEBdfd6O2ocKIzBYDAYDAaDwWAwGAwGg8FgOJP/A9GS+q4nd99kAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-3xl m-0">How To Start A Blog In 2023</h2>
          <p className="flex gap-1 my-1.5 mx-0 text-gray-400 text-xs font-bold ">
            <a className="text-black">Dhanu Kumar</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="my-2.5 mx-0 leading-6">
            Are you looking for an easy guide on how to start a blog? The
            step-by-step guide on this page will show you how to create a blog
            in 20 minutes with just the most basic computer skills.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
