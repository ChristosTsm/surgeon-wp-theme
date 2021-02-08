if (document.querySelector("[data-tab-target]")) {
	let tabs = document.querySelectorAll("[data-tab-target]");
	let tabsContent = document.querySelectorAll("[data-tab-content]");

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const target = document.querySelector(tab.dataset.tabTarget);
			tabsContent.forEach((tabConent) =>
				tabConent.classList.remove("active-tab")
			);
			tabs.forEach((tab) => tab.classList.remove("active-tab-btn"));
			tab.classList.add("active-tab-btn");
			target.classList.add("active-tab");
		});
	});

	tabs[0].classList.add("active-tab-btn");
	tabsContent[0].classList.add("active-tab");

	let _tabsXO = document.querySelectorAll("[data-tab-targetxo]");
	let _tabsContentXO = document.querySelectorAll("[data-tab-content-xo]");

	_tabsXO.forEach((_tab) => {
		_tab.addEventListener("click", () => {
			const _target = document.querySelector(_tab.dataset.tabTargetxo);
			_tabsContentXO.forEach((_tabContent) =>
				_tabContent.classList.remove("active-tab")
			);
			_tabsXO.forEach((_tab) => _tab.classList.remove("active-tab-btn"));
			_tab.classList.add("active-tab-btn");
			_target.classList.add("active-tab");
		});
	});

	_tabsXO[0].classList.add("active-tab-btn");
	_tabsContentXO[0].classList.add("active-tab");
}
