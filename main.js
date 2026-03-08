console.log("Omi");

// let allIssuesData = []; // API theke asha shob data ekhane save thakbe

// // 1. Loading Spinner handle korar logic
// const loadingSpinner = document.getElementById('loadingSpinner');

// function showLoading() {
//     loadingSpinner.classList.remove("hidden");
//     document.getElementById('issues-container').innerHTML = ""; 
// }

// function hideLoading() {
//     loadingSpinner.classList.add("hidden");
// }

// // স্পেসিফিক আইডি দিয়ে মোডাল দেখানো
// const showIssueDetails = async (id) => {
//     const modal = document.getElementById('issue_details_modal');
//     const modalContent = document.getElementById('modal-content');
    
//     // ১. প্রথমেই মোডাল ওপেন করে লোডিং স্পিনার দেখানো
//     modal.showModal();
//     modalContent.innerHTML = `
//         <div class="flex justify-center py-16">
//             <span class="loading loading-spinner loading-lg text-[#4a00ff]"></span>
//         </div>`;

//     // ২. আইডি দিয়ে স্পেসিফিক ইস্যু ফেচ করা
//     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/${issueId}');
//     const result = await res.json();
//     const issue = result.data;

//     // ৩. ফেচ করা ডাটা দিয়ে মোডাল কন্টেন্ট আপডেট করা
//     modalContent.innerHTML = `
//         <h2 class="text-2xl md:text-3xl font-black text-gray-800 mb-3 tracking-tight">${issue.title}</h2>
        
//         <div class="flex items-center gap-3 text-sm text-gray-400 mb-8">
//             <span class="px-4 py-1 rounded-full text-white font-black uppercase text-[10px] ${issue.status === 'open' ? 'bg-[#00C292]' : 'bg-purple-500'}">
//                 ${issue.status === 'open' ? 'Opened' : 'Closed'}
//             </span>
//             <span class="font-medium italic">Opened by <span class="text-gray-600 font-bold">${issue.author}</span> on ${issue.date}</span>
//         </div>

//         <div class="bg-gray-50 p-6 md:p-8 rounded-2xl mb-10 border border-gray-100">
//             <p class="text-gray-500 leading-relaxed text-sm md:text-lg font-medium italic">"${issue.description}"</p>
//         </div>

//         <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
//             <div>
//                 <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Assignee:</p>
//                 <p class="text-xl font-black text-gray-800">${issue.author}</p>
//             </div>
//             <div>
//                 <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Priority Level:</p>
//                 <span class="px-5 py-1 rounded-lg text-white text-[10px] font-black bg-red-500 uppercase shadow-md shadow-red-100">${issue.priority}</span>
//             </div>
//         </div>
//     `;
// };


// // 3. API theke main list load kora
// const loadIssues = async () => {
//     showLoading();
//     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
//     const result = await res.json();
//     allIssuesData = result.data; 

//     // Header count update
//     const openCount = allIssuesData.filter(i => i.status === 'open').length;
//     const closedCount = allIssuesData.filter(i => i.status === 'closed').length;
//     document.getElementById('open-count').innerText = `${openCount} Open`;
//     document.getElementById('closed-count').innerText = `${closedCount} Closed`;

//     displayIssues(allIssuesData); 
//     hideLoading();
// };

// // 4. Cards render function (Updated with Image Design)
// const displayIssues = (issues) => {
//     document.getElementById('total-issues').innerText = `${issues.length} Issues`;
//     const container = document.getElementById('issues-container');
//     container.innerHTML = ''; 

//     issues.forEach(issue => {
//         const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
//         const card = document.createElement('div');
//         card.setAttribute('onclick', `showIssueDetails('${issue.issue_id}')`);
//         card.className = `cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1`;
        
//         card.innerHTML = `
//             <div class="flex justify-between items-center mb-4">
//                 <span class="w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' ? 'bg-green-50 text-green-500' : 'bg-purple-50 text-purple-500'}">
//                     <svg xmlns="http://www.w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
//                 </span>
//                 <span class="text-[10px] font-bold px-4 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-400' : 'bg-blue-50 text-blue-400'} uppercase">
//                     ${issue.priority}
//                 </span>
//             </div>

//             <h3 class="font-bold text-gray-800 text-lg leading-tight mb-2">${issue.title}</h3>
//             <p class="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">${issue.description}</p>

//             <!-- Tags added as per image -->
//             <div class="flex gap-2 mb-6">
//                 <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-400 text-[10px] font-bold border border-red-100">
//                     <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg> BUG
//                 </span>
//                 <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-400 text-[10px] font-bold border border-orange-100">
//                     <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg> HELP WANTED
//                 </span>
//             </div>

//             <div class="mt-4 pt-4 border-t border-gray-50">
//                 <p class="text-xs text-gray-400 font-medium">#${issue.issue_id} &nbsp; by ${issue.author}</p>
//                 <p class="text-xs text-gray-400 mt-1">${issue.date}</p>
//             </div>
//         `;
//         container.appendChild(card);
//     });
// };

// // 5. Tab toggle function
// function toggleTab(clickedBtn, statusType) {
//     const allButtons = document.querySelectorAll('.tab-btn');
//     allButtons.forEach(btn => {
//         btn.classList.remove('bg-[#4a00ff]', 'text-white');
//         btn.classList.add('text-gray-500');
//     });
//     clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
//     clickedBtn.classList.remove('text-gray-500');

//     if (statusType === 'all') {
//         displayIssues(allIssuesData);
//     } else {
//         showLoading();
//         const filtered = allIssuesData.filter(issue => issue.status === statusType);
//         displayIssues(filtered);
//         hideLoading();
//     }
// }

// loadIssues();
// // Search Functionality
// // const handleSearch = () => {
// //     const searchText = document.getElementById('searchInput').value;

// //     // search box khali thakle sob data dekhabe
// //     if (!searchText) {
// //         displayIssues(allIssuesData);
// //         return;
// //     }

// //     // API call
// //     fetch(`https://phi-lab-server.vercel.app{searchText}`)
// //         .then(res => res.json())
// //         .then(result => {
// //             // card ghula update kora
// //             displayIssues(result.data || []);
// //         });
// // };
// //  handleSearch();

// // search functionality
// const handleSearch = async () => {
//     const searchText = document.getElementById('searchInput').value;

//     // jodi searchBox khali thake ,sob issues abar dekhabe
//     if (!searchText) {
//         displayIssues(allIssuesData);
//         updateCounts(allIssuesData);
//         return;
//     }

//     //type korar somoi loading spinner dekhano
//     const container = document.getElementById('issues-container');
//     container.innerHTML = `<div class="col-span-full flex justify-center py-10"><span class="loading loading-spinner loading-lg text-[#4a00ff]"></span></div>`;

//     try {
//     //API endPoint
//         const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}` );
//         const result = await res.json();
        
//         // search result card e dekhano (result.data check kora hocche)
//         displayIssues(result.data || []);
//     } catch (err) {
//         console.error("Search failed:", err);
//         container.innerHTML = `<p class="col-span-full text-center text-red-500 font-bold py-10">Search failed. Please check your internet or API!</p>`;
//     }
// };
// let allIssuesData = []; // API theke asha shob data ekhane save thakbe

// // 1. Loading Spinner handle korar logic
// const loadingSpinner = document.getElementById('loadingSpinner');

// function showLoading() {
//     loadingSpinner.classList.remove("hidden");
//     document.getElementById('issues-container').innerHTML = ""; 
// }

// function hideLoading() {
//     loadingSpinner.classList.add("hidden");
// }

// // ২. স্পেসিফিক আইডি দিয়ে মোডাল দেখানো (সংশোধিত)
// const showIssueDetails = async (id) => {
//     const modal = document.getElementById('issue_details_modal');
//     const modalContent = document.getElementById('modal-content');
    
//     modal.showModal();
//     modalContent.innerHTML = `
//         <div class="flex justify-center py-16">
//             <span class="loading loading-spinner loading-lg text-[#4a00ff]"></span>
//         </div>`;

//     let issue = null;

//     try {
//         const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
//         const result = await res.json();
//         if (result.data) {
//             issue = result.data;
//         }
//     } catch (error) {
//         console.warn("API failed, switching to local data...");
//     }

//     // লোকাল ডেটা থেকে খোঁজার সময় String এ কনভার্ট করে চেক করা নিরাপদ
//     if (!issue) {
//         issue = allIssuesData.find(item => String(item.issue_id) === String(id));
//     }

//     if (issue) {
//         modalContent.innerHTML = `
//             <h2 class="text-2xl md:text-3xl font-black text-gray-800 mb-3 tracking-tight">${issue.title}</h2>
            
//             <div class="flex items-center gap-3 text-sm text-gray-400 mb-8">
//                 <span class="px-4 py-1 rounded-full text-white font-black uppercase text-[10px] ${issue.status === 'open' ? 'bg-[#00C292]' : 'bg-purple-500'}">
//                     ${issue.status === 'open' ? 'Opened' : 'Closed'}
//                 </span>
//                 <span class="font-medium italic">Opened by <span class="text-gray-600 font-bold">${issue.author}</span> on ${issue.date}</span>
//             </div>

//             <div class="bg-gray-50 p-6 md:p-8 rounded-2xl mb-10 border border-gray-100">
//                 <p class="text-gray-500 leading-relaxed text-sm md:text-lg font-medium italic">"${issue.description}"</p>
//             </div>

//             <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
//                 <div>
//                     <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Assignee:</p>
//                     <p class="text-xl font-black text-gray-800">${issue.author}</p>
//                 </div>
//                 <div>
//                     <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Priority Level:</p>
//                     <span class="px-5 py-1 rounded-lg text-white text-[10px] font-black bg-red-500 uppercase shadow-md shadow-red-100">${issue.priority}</span>
//                 </div>
//             </div>
//         `;
//     } else {
//         modalContent.innerHTML = `<p class="text-center text-red-500 py-10 font-bold">Error: Issue not found!</p>`;
//     }
// };


// // 3. API theke main list load kora
// const loadIssues = async () => {
//     showLoading();
//     try {
//         const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
//         const result = await res.json();
//         allIssuesData = result.data; 

//         // Header count update
//         updateCounts(allIssuesData);

//         displayIssues(allIssuesData); 
//     } catch (err) {
//         console.error("Fetch error:", err);
//     }
//     hideLoading();
// };

// // Count Update Helper Function
// function updateCounts(issues) {
//     const openCount = issues.filter(i => i.status === 'open').length;
//     const closedCount = issues.filter(i => i.status === 'closed').length;
//     document.getElementById('open-count').innerText = `${openCount} Open`;
//     document.getElementById('closed-count').innerText = `${closedCount} Closed`;
// }

// // 4. Cards render function
// const displayIssues = (issues) => {
//     document.getElementById('total-issues').innerText = `${issues.length} Issues`;
//     const container = document.getElementById('issues-container');
//     container.innerHTML = ''; 

//     issues.forEach(issue => {
//         const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
//         const card = document.createElement('div');
        
//         // এখানে ক্লিক ফাংশন সেট করা হয়েছে
//         card.setAttribute('onclick', `showIssueDetails('${issue.issue_id}')`);
        
//         card.className = `cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1`;
        
//         card.innerHTML = `
//             <div class="flex justify-between items-center mb-4">
//                 <span class="w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' ? 'bg-green-50 text-green-500' : 'bg-purple-50 text-purple-500'}">
//                     <svg xmlns="http://www.w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
//                 </span>
//                 <span class="text-[10px] font-bold px-4 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-400' : 'bg-blue-50 text-blue-400'} uppercase">
//                     ${issue.priority}
//                 </span>
//             </div>

//             <h3 class="font-bold text-gray-800 text-lg leading-tight mb-2">${issue.title}</h3>
//             <p class="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">${issue.description}</p>

//             <div class="flex gap-2 mb-6">
//                 <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-400 text-[10px] font-bold border border-red-100">
//                     <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg> BUG
//                 </span>
//                 <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-400 text-[10px] font-bold border border-orange-100">
//                     <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg> HELP WANTED
//                 </span>
//             </div>

//             <div class="mt-4 pt-4 border-t border-gray-50">
//                 <p class="text-xs text-gray-400 font-medium">#${issue.issue_id} &nbsp; by ${issue.author}</p>
//                 <p class="text-xs text-gray-400 mt-1">${issue.date}</p>
//             </div>
//         `;
//         container.appendChild(card);
//     });
// };

// // 5. Tab toggle function
// function toggleTab(clickedBtn, statusType) {
//     const allButtons = document.querySelectorAll('.tab-btn');
//     allButtons.forEach(btn => {
//         btn.classList.remove('bg-[#4a00ff]', 'text-white');
//         btn.classList.add('text-gray-500');
//     });
//     clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
//     clickedBtn.classList.remove('text-gray-500');

//     if (statusType === 'all') {
//         displayIssues(allIssuesData);
//     } else {
//         const filtered = allIssuesData.filter(issue => issue.status === statusType);
//         displayIssues(filtered);
//     }
// }
// 6. Search functionality
// const handleSearch = async () => {
//     const searchText = document.getElementById('searchInput').value;

//     if (!searchText) {
//         displayIssues(allIssuesData);
//         updateCounts(allIssuesData);
//         return;
//     }

//     const container = document.getElementById('issues-container');
//     container.innerHTML = `<div class="col-span-full flex justify-center py-10"><span class="loading loading-spinner loading-lg text-[#4a00ff]"></span></div>`;

//     try {
//         const res = await fetch(`https://phi-lab-server.vercel.app/search?q=${searchText}`);
//         const result = await res.json();
//         displayIssues(result.data || []);
//     } catch (err) {
//         console.error("Search failed:", err);
//         container.innerHTML = `<p class="col-span-full text-center text-red-500 font-bold py-10">Search failed!</p>`;
//     }
// };

let allIssuesData = []; 

const loadingSpinner = document.getElementById('loadingSpinner');

// ১. loading handler
function showLoading() {
    if(loadingSpinner) loadingSpinner.classList.remove("hidden");
}

function hideLoading() {
    if(loadingSpinner) loadingSpinner.classList.add("hidden");
}

// dynamic details dekhanor function
const showIssueDetails = async (id) => {
    const modal = document.getElementById('issue_details_modal');
    const modalContent = document.getElementById('modal-content');
    
    if(!modal) return;
    modal.showModal();

    // loading spinner dekhano
    modalContent.innerHTML = `
        <div class="flex justify-center py-16">
            <span class="loading loading-spinner loading-lg text-[#4a00ff]"></span>
        </div>`;

    let issue = null;

    try {
        // API theke specific data id ana
        const res = await fetch(`https://phi-lab-server.vercel.app{id}`);
        const result = await res.json();
        if (result.data) {
            issue = result.data;
        }
    } catch (error) {
        console.warn("API direct fetch failed, searching in local data...");
    }

    // API kaj na korle local array theke khuja (id or issue_id jekono ta hote pare)
    if (!issue) {
        issue = allIssuesData.find(item => 
            String(item.issue_id) === String(id) || String(item._id) === String(id) || String(item.id) === String(id)
        );
    }

    if (issue) {
        // data dynamically set (undefined prevent e default value)
        const displayTitle = issue.title || "No Title Available";
        const displayAuthor = issue.author || "Unknown Author";
        const displayDate = issue.createdAt || "Unknown Date";
        const displayDesc = issue.description || "No description provided.";
        const displayPriority = issue.priority || "NORMAL";
        const displayStatus = issue.status === 'open' ? 'Opened' : 'Closed';

        modalContent.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-black text-gray-800 mb-3 tracking-tight">${displayTitle}</h2>
            
            <div class="flex items-center gap-3 text-sm text-gray-400 mb-8">
                <span class="px-4 py-1 rounded-full text-white font-black uppercase text-[10px] ${issue.status === 'open' ? 'bg-[#00C292]' : 'bg-purple-500'}">
                    ${displayStatus}
                </span>
                <span class="font-medium italic">Opened by <span class="text-gray-600 font-bold">${displayAuthor}</span> on ${displayDate}</span>
            </div>

            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl mb-10 border border-gray-100">
                <p class="text-gray-500 leading-relaxed text-sm md:text-lg font-medium italic">"${displayDesc}"</p>
            </div>

            <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                    <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Assignee:</p>
                    <p class="text-xl font-black text-gray-800">${displayAuthor}</p>
                </div>
                <div>
                    <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Priority Level:</p>
                    <span class="px-5 py-1 rounded-lg text-white text-[10px] font-black bg-red-500 uppercase shadow-md shadow-red-100">${displayPriority}</span>
                </div>
            </div>
        `;
    } else {
        modalContent.innerHTML = `<p class="text-center text-red-500 py-10 font-bold">Error: Issue with ID ${id} not found!</p>`;
    }
};

// card render korar somoi id dynamic kora
const displayIssues = (issues) => {
    const totalIssuesElem = document.getElementById('total-issues');
    if(totalIssuesElem) totalIssuesElem.innerText = `${issues.length} Issues`;
    
    const container = document.getElementById('issues-container');
    container.innerHTML = ''; 

    issues.forEach(issue => {
        // API theke je nam e asuk ID dhora(issue_id or _id or id)
        const uniqueId = issue.issue_id || issue._id || issue.id;
        
        const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
        const card = document.createElement('div');
        
        // ekhane cllick korle oi nirdirsto id pass kora
        card.onclick = () => showIssueDetails(uniqueId);
        
        card.className = `cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1`;
        
        card.innerHTML = `
              <!-- Top Section: Icon & Priority -->
            <div class="flex justify-between items-center mb-4">
                <span class="w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' ? 'bg-green-50 text-[#00C292]' : 'bg-purple-50 text-purple-500'}">
                    <svg xmlns="http://www.w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
                </span>
                <span class="text-[10px] font-bold px-4 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-400' : 'bg-blue-50 text-blue-400'} uppercase">
                    ${issue.priority || 'NORMAL'}
                </span>
            </div>

            <!-- Title & Description -->
            <h3 class="font-bold text-gray-800 text-lg leading-tight mb-2">${issue.title}</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">${issue.description}</p>

        
<div class="flex flex-wrap gap-2 mb-6">
    ${(issue.labels || []).map(label => {
        const isBug = label.toLowerCase() === 'bug';
        
        const colors = isBug 
            ? "bg-red-50 text-red-400 border-red-100" 
            : "bg-orange-50 text-orange-400 border-orange-100";

        const icon = isBug
            ? '<path d="M18 6L6 18M6 6l12 12"></path>'
            : '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path>';

        return `
            <span class="flex items-center gap-1 px-3 py-1 rounded-full ${colors} text-[10px] font-bold border">
                <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${icon}
                </svg> 
                ${label.toUpperCase()}
            </span>
        `;
    }).join('')}
</div>



            
            <div class="mt-4 pt-4 border-t border-gray-50">
                <p class="text-xs text-gray-400 font-medium">#${uniqueId} &nbsp; by ${issue.author}</p>
<p class="text-xs text-gray-400 mt-1">
    ${issue.createdAt ? new Date(issue.createdAt).toLocaleDateString() : 'No Date'}
</p>

            </div>
        `;
        container.appendChild(card);
    });
};

// API theke list load kora
const loadIssues = async () => {
    showLoading();
    try {
        const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
        const result = await res.json();
        allIssuesData = result.data || []; 

        updateCounts(allIssuesData);
        displayIssues(allIssuesData); 
    } catch (err) {
        console.error("Fetch error:", err);
    }
    hideLoading();
};

function updateCounts(issues) {
    const openCount = issues.filter(i => i.status === 'open').length;
    const closedCount = issues.filter(i => i.status === 'closed').length;
    const openElem = document.getElementById('open-count');
    const closedElem = document.getElementById('closed-count');
    if(openElem) openElem.innerText = `${openCount} Open`;
    if(closedElem) closedElem.innerText = `${closedCount} Closed`;
}

// load shuru
loadIssues();


let currentTab = 'all'; 

// ২. Tab toggle function 
function toggleTab(clickedBtn, statusType) {
    currentTab = statusType; // বর্তমানে কোন ট্যাবে আছেন তা সেভ করা হলো

    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('bg-[#4a00ff]', 'text-white');
        btn.classList.add('text-gray-500');
    });

    clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
    clickedBtn.classList.remove('text-gray-500');

    showLoading();

    setTimeout(() => {
        if (statusType === 'all') {
            displayIssues(allIssuesData);
            updateCounts(allIssuesData);
        } else {
            const filtered = allIssuesData.filter(issue => issue.status === statusType);
            displayIssues(filtered);
            updateCounts(filtered); // nirdistto tab count updated 
        }
        hideLoading();
    }, 200); 
}

//handleSearch function
const handleSearch = async () => {
    const searchText = document.getElementById('searchInput').value;

    // jodi searchBox khali thake, tobe vortoman tab onujayi data firiye ana
    if (!searchText) {
        const resetData = currentTab === 'all' 
            ? allIssuesData 
            : allIssuesData.filter(issue => issue.status === currentTab);
        displayIssues(resetData);
        updateCounts(resetData);
        return;
    }

    const container = document.getElementById('issues-container');
    container.innerHTML = `
        <div class="col-span-full flex justify-center py-10">
            <span class="loading loading-spinner loading-lg text-[#4a00ff]"></span>
        </div>`;

    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
        const result = await res.json();
        
        let searchResults = result.data || [];

        //  Filtering: jodi open & closed tab e thaken, tobe shudu oi status er data dekhabe
        if (currentTab !== 'all') {
            searchResults = searchResults.filter(issue => issue.status === currentTab);
        }

        displayIssues(searchResults);
        updateCounts(searchResults); 

    } catch (err) {
        console.error("Search failed:", err);
        container.innerHTML = `<p class="col-span-full text-center text-red-500 font-bold py-10">Search failed!</p>`;
    }
};
