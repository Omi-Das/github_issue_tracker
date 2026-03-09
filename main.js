console.log("Omi");

let allIssuesData = []; 

const loadingSpinner = document.getElementById('loadingSpinner');

function showLoading() {
    if(loadingSpinner) loadingSpinner.classList.remove("hidden");
}

function hideLoading() {
    if(loadingSpinner) loadingSpinner.classList.add("hidden");
}

const showIssueDetails = async (id) => {
    const modal = document.getElementById('issue_details_modal');
    const modalContent = document.getElementById('modal-content');
    
    if(!modal) return;
    modal.showModal();

    modalContent.innerHTML = `
        <div class="flex justify-center py-16">
            <span class="loading loading-spinner loading-lg text-[#4a00ff]"></span>
        </div>`;

    let issue = null;

    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        const result = await res.json();
        
        if (result && result.data) {
            issue = result.data;
        }
    } catch (error) {
        console.warn("API fetch failed, checking local data...");
    }

    // API-te na pele local array (allIssuesData) theke khuja
    if (!issue && typeof allIssuesData !== 'undefined') {
        issue = allIssuesData.find(item => 
            String(item.issue_id) === String(id) || 
            String(item._id) === String(id) || 
            String(item.id) === String(id)
        );
    }

    if (issue) {
        const displayTitle = issue.title || "No Title Available";
        const displayAuthor = issue.author || "Unknown Author";
        const displayAssignee = issue.assignee || "Unassigned"; 
        const displayDate = issue.createdAt ? new Date(issue.createdAt).toLocaleDateString() : "Unknown Date";
        const displayDesc = issue.description || "No description provided.";
        const displayPriority = issue.priority || "NORMAL";
        const displayStatus = issue.status === 'open' ? 'Opened' : 'Closed';

        modalContent.innerHTML = `
            <h2 class="text-2xl md:text-3xl font-black text-gray-800 mb-3 tracking-tight">${displayTitle}</h2>
            
            <div class="flex items-center gap-3 text-sm text-gray-400 mb-8">
                <span class="px-4 py-1 rounded-full text-white font-black uppercase text-[10px] ${issue.status === 'open' ? 'bg-[#00a96a]' : 'bg-purple-500'}">
                    ${displayStatus}
                </span>
                <span class="font-medium ">Opened by <span class="text-gray-600 font-thin">${displayAuthor}</span> : ${displayDate}</span>
            </div>

           
           <div class="flex flex-wrap gap-2 mb-6">
    ${(issue.labels || []).map(label => {
        const lowerLabel = label.toLowerCase();
        let colors = "";
        let iconSrc = "";

      
        if (lowerLabel === 'bug') {
            colors = "bg-red-50 text-red-400 border-red-100";
            iconSrc = "./assets/BugDroid.png";
        } else if (lowerLabel === 'documentation' || lowerLabel === 'help wanted') {
           
            colors = "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"; 
            iconSrc = "./assets/vector (1).png";
        } else if (lowerLabel === 'enhancement') {
            colors = "bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]";
            iconSrc = "./assets/vector (2).png";
        } 
        else if (lowerLabel === 'good first issue'){
            colors = "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"
            iconSrc = "./assets/vector (1).png";
        }

        else {
            colors = "bg-gray-50 text-gray-400 border-gray-100";
            iconSrc = "./assets/vector (1).png";
        }

        return `
            <span class="flex items-center gap-1.5 px-3 py-1 rounded-full ${colors} text-[10px] font-bold border">
                <img src="${iconSrc}" alt="${label}" class="w-3 h-3 object-contain">
                ${label.toUpperCase()}
            </span>
        `;
    }).join('')}
</div>


            <div class="bg-gray-50 p-6 md:p-8 rounded-2xl mb-10 border border-gray-100">
                <p class="text-gray-500 leading-relaxed text-sm md:text-lg font-medium italic">"${displayDesc}"</p>
            </div>

            <div class="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                    <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Assignee:</p>
                    <p class="text-xl font-black text-gray-800">${displayAssignee}</p>
                </div>
                <div>
                    <p class="text-gray-400 text-[10px] mb-1 uppercase font-black tracking-widest">Priority Level:</p>
                    <span class="px-5 py-1 rounded-lg text-white text-[10px] font-black ${issue.priority === 'HIGH' ? 'bg-red-500' : 'bg-blue-500'} uppercase shadow-md shadow-gray-100">${displayPriority}</span>
                </div>
            </div>
        `;
    } else {
        modalContent.innerHTML = `
            <div class="text-center py-10">
                <p class="text-red-500 font-bold">Error: Issue not found!</p>
                <p class="text-gray-400 text-sm">ID: ${id}</p>
            </div>`;
    }
};

const displayIssues = (issues) => {
    const totalIssuesElem = document.getElementById('total-issues');
    if(totalIssuesElem) totalIssuesElem.innerText = `${issues.length} Issues`;
    
    const container = document.getElementById('issues-container');
    container.innerHTML = ''; 

    issues.forEach(issue => {
        const uniqueId = issue.issue_id || issue._id || issue.id;
        
        const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
        const card = document.createElement('div');
        
        card.onclick = () => showIssueDetails(uniqueId);
        
        card.className = `cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1`;
        
        card.innerHTML = `
              <!-- Top Section: Icon & Priority -->
            <div class="flex justify-between items-center mb-4">
                <span class="w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' ? 'bg-green-50 text-[#00C292]' : 'bg-purple-50 text-purple-500'}">
                  <img src="${issue.status === 'open' ? './assets/Status.png' : 
                    './assets/Status (1).png'}" alt="status-icon">
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
        const lowerLabel = label.toLowerCase();
        let colors = "";
        let iconSrc = "";

      
        if (lowerLabel === 'bug') {
            colors = "bg-red-50 text-red-400 border-red-100";
            iconSrc = "./assets/BugDroid.png";
        } else if (lowerLabel === 'documentation' || lowerLabel === 'help wanted') {
           
            colors = "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"; 
            iconSrc = "./assets/vector (1).png";
        } else if (lowerLabel === 'enhancement') {
            colors = "bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]";
            iconSrc = "./assets/vector (2).png";
        } 
        else if (lowerLabel === 'good first issue'){
            colors = "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]"
            iconSrc = "./assets/vector (1).png";
        }

        else {
            colors = "bg-gray-50 text-gray-400 border-gray-100";
            iconSrc = "./assets/vector (1).png";
        }

        return `
            <span class="flex items-center gap-1.5 px-3 py-1 rounded-full ${colors} text-[10px] font-bold border">
                <img src="${iconSrc}" alt="${label}" class="w-3 h-3 object-contain">
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
