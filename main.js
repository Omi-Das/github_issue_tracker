console.log("Omi");

// const loadingSpinner = document.getElementById('loadingSpinner');

// // frameContainer add korchi
// function showLoading(){
//     loadingSpinner.classList.remove("hidden");
//     frameContainer.innerHTML = "";
// }
// function hideLoading(){
//     loadingSpinner.classList.add("hidden");
// }

// function toggleTab(clickedBtn) {
//     // 1. Shob gula button ke 'tab-btn' class diye khuje ber kora hocche
//     const allButtons = document.querySelectorAll('.tab-btn');
    
//     // 2. Proti ta button er upor loop chaliye ager active style gula muche fela hocche
//     allButtons.forEach(btn => {
//         // Active thakle Blue background r White text shoriye fela hocche
//         btn.classList.remove('bg-[#4a00ff]', 'text-white');
        
//         // Default Gray color add kora hocche
//         btn.classList.add('text-gray-500');
//     });

//     // 3. Ekhon je button e click kora hoyeche, shetate Blue background r White text dewa hocche
//     clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
    
//     // Active button theke Gray color ta shoriye dewa hocche
//     clickedBtn.classList.remove('text-gray-500');
// }

// const loadIssues = async () => {
//     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
//     const result = await res.json();
    
//     // API output check korle dekha jay real data 'result.data' er bhetor thake
//     const issues = result.data; 

//     // Dynamic count set kora
//     document.getElementById('total-issues').innerText = `${issues.length} Issues`;

//     const container = document.getElementById('issues-container');
//     container.innerHTML = ''; 

//     issues.forEach(issue => {
//         // Border color logic: status 'open' hole green, otherwise purple
//         const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';

//         const card = document.createElement('div');
//         card.className = `bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-md`;
        
//         card.innerHTML = `
//             <div class="flex justify-between items-start">
//                 <!-- Icon onujayi priority color change -->
//                 <span class="p-2 bg-gray-50 rounded-lg">
//                     <i class="fa-regular fa-circle-dot ${issue.status === 'open' ? 'text-green-500' : 'text-purple-500'}"></i>
//                 </span>
//                 <span class="text-[11px] font-bold px-3 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-500' : (issue.priority === 'MEDIUM' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-500')}">
//                     ${issue.priority}
//                 </span>
//             </div>

//             <h3 class="font-bold text-gray-800 mt-4 text-lg leading-tight">${issue.title}</h3>
//             <p class="text-sm text-gray-500 mt-2 line-clamp-2">${issue.description}</p>
            
//             <div class="flex flex-wrap gap-2 mt-4">
//                 <span class="text-[10px] font-bold bg-[#fecaca] text-pink-500 px-2 py-1 rounded-full"># BUG</span>
//                 <span class="text-[10px] font-bold bg-[#fde68a] text-orange-600 px-2 py-1 rounded-full"># HELP WANTED</span>
//             </div>

//             <div class="mt-6 pt-4 border-t border-gray-50 flex flex-col gap-1">
//                 <p class="text-xs text-gray-400 font-medium">#${issue.issue_id} by <span class="text-gray-600">${issue.author}</span></p>
//                 <p class="text-xs text-gray-400">${issue.date}</p>
//             </div>
//         `;
//         container.appendChild(card);
//     });
   
// };

// loadIssues();


let allIssuesData = []; // API theke asha shob data ekhane thakbe

const loadIssues = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const result = await res.json();
    
    allIssuesData = result.data; // Shob issues variable-e save kora holo
    displayIssues(allIssuesData); // Initial-e shob (All) dekhano holo
};

// Cards bananor common function
const displayIssues = (issues) => {
    // Heading-er count dynamic kora
    document.getElementById('total-issues').innerText = `${issues.length} Issues`;

    const container = document.getElementById('issues-container');
    container.innerHTML = ''; 

    issues.forEach(issue => {
        const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
        const card = document.createElement('div');
        card.className = `bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-md`;
        
        card.innerHTML = `
            <div class="flex justify-between items-start">
                <span class="p-2 bg-gray-50 rounded-lg">
                    <i class="fa-regular fa-circle-dot ${issue.status === 'open' ? 'text-green-500' : 'text-purple-500'}"></i>
                </span>
                <span class="text-[11px] font-bold px-3 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-500' : (issue.priority === 'MEDIUM' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-500')}">
                    ${issue.priority}
                </span>
            </div>
            <h3 class="font-bold text-gray-800 mt-4 text-lg leading-tight">${issue.title}</h3>
            <p class="text-sm text-gray-500 mt-2 line-clamp-2">${issue.description}</p>
            <div class="flex flex-wrap gap-2 mt-4">
                <span class="text-[10px] font-bold bg-[#fecaca] text-pink-500 px-2 py-1 rounded-full"># BUG</span>
                <span class="text-[10px] font-bold bg-[#fde68a] text-orange-600 px-2 py-1 rounded-full"># HELP WANTED</span>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-50 flex flex-col gap-1">
                <p class="text-xs text-gray-400 font-medium">#${issue.issue_id} by <span class="text-gray-600">${issue.author}</span></p>
                <p class="text-xs text-gray-400">${issue.date}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// Updated toggleTab function with filtering logic
function toggleTab(clickedBtn, statusType) {
    // 1. Button style change logic
    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('bg-[#4a00ff]', 'text-white');
        btn.classList.add('text-gray-500');
    });
    clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
    clickedBtn.classList.remove('text-gray-500');

    // 2. Filter logic: statusType 'all' hole shob, naile filter kora data show hobe
    if (statusType === 'all') {
        displayIssues(allIssuesData);
    } else {
        const filtered = allIssuesData.filter(issue => issue.status === statusType);
        displayIssues(filtered);
    }
}

loadIssues();
