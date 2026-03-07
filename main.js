console.log("Omi");

let allIssuesData = []; // API theke asha shob data ekhane save thakbe

// 1. Loading Spinner handle korar logic
const loadingSpinner = document.getElementById('loadingSpinner');

function showLoading() {
    loadingSpinner.classList.remove("hidden");
    document.getElementById('issues-container').innerHTML = ""; 
}

function hideLoading() {
    loadingSpinner.classList.add("hidden");
}

// 2. Specific ID diye Modal dekhano (API Path thik kora hoyeche)
const showIssueDetails = async (id) => {
    const modal = document.getElementById('issue_details_modal');
    const modalContent = document.getElementById('modal-content');
    
    modal.showModal();
    modalContent.innerHTML = `<div class="flex justify-center py-10"><span class="loading loading-spinner loading-lg text-[#4a00ff]"></span></div>`;

    // fetch URL-e add kora hoyeche
    const res = await fetch(`https://phi-lab-server.vercel.app{id}`);
    const result = await res.json();
    const issue = result.data;

    modalContent.innerHTML = `
        <h2 class="text-3xl font-extrabold text-gray-800 mb-2">${issue.title}</h2>
        <div class="flex items-center gap-3 text-sm text-gray-400 mb-6">
            <span class="px-3 py-1 rounded-full text-white font-bold ${issue.status === 'open' ? 'bg-[#00C292]' : 'bg-purple-500'}">
                ${issue.status === 'open' ? 'Opened' : 'Closed'}
            </span>
            <span>• Opened by <span class="text-gray-600 font-bold">${issue.author}</span> • ${issue.date}</span>
        </div>
        <p class="text-gray-500 leading-relaxed text-lg mb-10">${issue.description}</p>
        <div class="grid grid-cols-2 gap-10 border-t border-gray-100 pt-8">
            <div>
                <p class="text-gray-400 text-xs mb-1 uppercase font-bold tracking-widest">Assignee:</p>
                <p class="text-xl font-black text-gray-800">${issue.author}</p>
            </div>
            <div>
                <p class="text-gray-400 text-xs mb-1 uppercase font-bold tracking-widest">Priority:</p>
                <span class="px-6 py-1 rounded-full text-white text-[10px] font-black bg-red-500 uppercase">${issue.priority}</span>
            </div>
        </div>
    `;
};

// 3. API theke main list load kora
const loadIssues = async () => {
    showLoading();
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const result = await res.json();
    allIssuesData = result.data; 

    // Header count update
    const openCount = allIssuesData.filter(i => i.status === 'open').length;
    const closedCount = allIssuesData.filter(i => i.status === 'closed').length;
    document.getElementById('open-count').innerText = `${openCount} Open`;
    document.getElementById('closed-count').innerText = `${closedCount} Closed`;

    displayIssues(allIssuesData); 
    hideLoading();
};

// 4. Cards render function (Updated with Image Design)
const displayIssues = (issues) => {
    document.getElementById('total-issues').innerText = `${issues.length} Issues`;
    const container = document.getElementById('issues-container');
    container.innerHTML = ''; 

    issues.forEach(issue => {
        const borderColor = issue.status === 'open' ? 'border-t-[#00C292]' : 'border-t-[#A855F7]';
        const card = document.createElement('div');
        card.setAttribute('onclick', `showIssueDetails('${issue.issue_id}')`);
        card.className = `cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-t-4 ${borderColor} transition-all hover:shadow-xl hover:-translate-y-1`;
        
        card.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <span class="w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' ? 'bg-green-50 text-green-500' : 'bg-purple-50 text-purple-500'}">
                    <svg xmlns="http://www.w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
                </span>
                <span class="text-[10px] font-bold px-4 py-1 rounded-full ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-400' : 'bg-blue-50 text-blue-400'} uppercase">
                    ${issue.priority}
                </span>
            </div>

            <h3 class="font-bold text-gray-800 text-lg leading-tight mb-2">${issue.title}</h3>
            <p class="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">${issue.description}</p>

            <!-- Tags added as per image -->
            <div class="flex gap-2 mb-6">
                <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-400 text-[10px] font-bold border border-red-100">
                    <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg> BUG
                </span>
                <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-400 text-[10px] font-bold border border-orange-100">
                    <svg xmlns="http://www.w3.org" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg> HELP WANTED
                </span>
            </div>

            <div class="mt-4 pt-4 border-t border-gray-50">
                <p class="text-xs text-gray-400 font-medium">#${issue.issue_id} &nbsp; by ${issue.author}</p>
                <p class="text-xs text-gray-400 mt-1">${issue.date}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// 5. Tab toggle function
function toggleTab(clickedBtn, statusType) {
    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('bg-[#4a00ff]', 'text-white');
        btn.classList.add('text-gray-500');
    });
    clickedBtn.classList.add('bg-[#4a00ff]', 'text-white');
    clickedBtn.classList.remove('text-gray-500');

    if (statusType === 'all') {
        displayIssues(allIssuesData);
    } else {
        const filtered = allIssuesData.filter(issue => issue.status === statusType);
        displayIssues(filtered);
    }
}

loadIssues();
