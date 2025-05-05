module.exports = {

"[project]/pages/baby/[babyId].tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>BabyPage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/ko.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-i18next [external] (react-i18next, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
function BabyPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { babyId } = router.query;
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__["useTranslation"])();
    const [babyData, setBabyData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(new Date());
    const [selectedHour, setSelectedHour] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(12);
    const [selectedMinute, setSelectedMinute] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("분유");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [weekStartDate, setWeekStartDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(new Date(), {
        weekStartsOn: 0
    }));
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("input");
    const [saveMessage, setSaveMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const fetchBaby = async ()=>{
            if (!babyId) return;
            const docRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "babies", babyId);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(docRef);
            if (docSnap.exists()) {
                setBabyData(docSnap.data());
            }
        };
        fetchBaby();
    }, [
        babyId
    ]);
    const fetchRecords = async ()=>{
        if (!babyId || !weekStartDate) return;
        const start = new Date(weekStartDate);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addDays"])(start, 6);
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "records"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("babyId", "==", babyId), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("date", ">=", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(start, "yyyy-MM-dd")), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("date", "<=", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(end, "yyyy-MM-dd")));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        const result = [];
        snapshot.forEach((doc)=>result.push({
                id: doc.id,
                ...doc.data()
            }));
        setRecords(result);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchRecords();
    }, [
        babyId,
        weekStartDate
    ]);
    const handleSave = async ()=>{
        if (!babyId || !selectedDate || !selectedType) return;
        if ((selectedType === "분유" || selectedType === "모유") && !amount) return;
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd");
        const timeStr = `${String(selectedHour).padStart(2, "0")}:${String(selectedMinute).padStart(2, "0")}`;
        const recordId = `${babyId}-${dateStr}-${timeStr}-${selectedType}`;
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "records", recordId), {
            babyId,
            date: dateStr,
            hour: selectedHour,
            minute: selectedMinute,
            type: selectedType,
            value: selectedType === "분유" || selectedType === "모유" ? Number(amount) : 1,
            timestamp: new Date()
        });
        setAmount("");
        setSaveMessage(t("saved"));
        setTimeout(()=>setSaveMessage(null), 3000);
        await fetchRecords();
    };
    const handleDelete = async (recordId)=>{
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "records", recordId));
        await fetchRecords();
    };
    const handleEdit = async (recordId, newValue)=>{
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "records", recordId), {
            value: Number(newValue)
        }, {
            merge: true
        });
        await fetchRecords();
    };
    const getWeekDays = (date)=>Array.from({
            length: 7
        }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["addDays"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
                weekStartsOn: 0
            }), i));
    const handleTabChange = (tab)=>setActiveTab(tab);
    const changeLanguage = (lng)=>i18n.changeLanguage(lng);
    const days = getWeekDays(weekStartDate);
    const hours = Array.from({
        length: 24
    }, (_, i)=>i);
    const minutes = [
        0,
        15,
        30,
        45
    ];
    const getSummary = (day)=>{
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "yyyy-MM-dd");
        const dayRecords = records.filter((r)=>r.date === dateStr);
        const milkTotal = dayRecords.filter((r)=>r.type === "분유").reduce((acc, r)=>acc + Number(r.value || 0), 0);
        const breastTime = dayRecords.filter((r)=>r.type === "모유").reduce((acc, r)=>acc + Number(r.value || 0), 0);
        const peeCount = dayRecords.filter((r)=>r.type === "소변").length;
        const poopCount = dayRecords.filter((r)=>r.type === "대변").length;
        return {
            milkTotal,
            breastTime,
            totalMilk: milkTotal + breastTime * 3,
            peeCount,
            poopCount
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            backgroundColor: "#fff",
            color: "#000",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/"),
                        style: {
                            fontWeight: "bold",
                            color: "#333"
                        },
                        children: [
                            "🏠 ",
                            t("home")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>changeLanguage("ko"),
                                children: "🇰🇷"
                            }, void 0, false, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>changeLanguage("en"),
                                children: "🇺🇸"
                            }, void 0, false, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>changeLanguage("vi"),
                                children: "🇻🇳"
                            }, void 0, false, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/baby/[babyId].tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            babyData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: "1rem",
                    padding: "1rem",
                    backgroundColor: "#e3f2fd",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        children: [
                            "👶 ",
                            t("babyInfo")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 150,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: [
                                    t("name"),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 151,
                                columnNumber: 8
                            }, this),
                            " ",
                            babyData.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 151,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: [
                                    t("birthDate"),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 152,
                                columnNumber: 8
                            }, this),
                            " ",
                            babyData.birthdate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 152,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/baby/[babyId].tsx",
                lineNumber: 141,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleTabChange("input"),
                        style: {
                            backgroundColor: activeTab === "input" ? "#0070f3" : "#ccc",
                            color: "#fff",
                            padding: "8px 16px",
                            borderRadius: "6px"
                        },
                        children: [
                            "📌 ",
                            t("inputRecord")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleTabChange("output"),
                        style: {
                            backgroundColor: activeTab === "output" ? "#0070f3" : "#ccc",
                            color: "#fff",
                            padding: "8px 16px",
                            borderRadius: "6px"
                        },
                        children: [
                            "📌 ",
                            t("outputRecord")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/baby/[babyId].tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            activeTab === "input" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: [
                            "📌 ",
                            t("inputRecord")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 169,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-4 rounded-lg max-w-md space-y-4 shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "mb-1 font-medium",
                                        children: t("date")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 175,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        selected: selectedDate,
                                        onChange: (date)=>setSelectedDate(date),
                                        dateFormat: "yyyy-MM-dd",
                                        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ko"],
                                        className: "border rounded p-2"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 176,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 174,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "mb-1 font-medium",
                                        children: t("time")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 187,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                value: selectedHour,
                                                onChange: (e)=>setSelectedHour(Number(e.target.value)),
                                                className: "border rounded p-2 w-1/2",
                                                children: hours.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: h,
                                                        children: [
                                                            String(h).padStart(2, "0"),
                                                            "시"
                                                        ]
                                                    }, h, true, {
                                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 15
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/baby/[babyId].tsx",
                                                lineNumber: 189,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                value: selectedMinute,
                                                onChange: (e)=>setSelectedMinute(Number(e.target.value)),
                                                className: "border rounded p-2 w-1/2",
                                                children: minutes.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: m,
                                                        children: [
                                                            String(m).padStart(2, "0"),
                                                            "분"
                                                        ]
                                                    }, m, true, {
                                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 15
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/baby/[babyId].tsx",
                                                lineNumber: 198,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 188,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 186,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "mb-1 font-medium",
                                        children: t("type")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 212,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        value: selectedType,
                                        onChange: (e)=>setSelectedType(e.target.value),
                                        className: "border rounded p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "분유",
                                                children: [
                                                    "🍼 ",
                                                    t("formulaMilk")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/baby/[babyId].tsx",
                                                lineNumber: 218,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "모유",
                                                children: [
                                                    "🤱 ",
                                                    t("breastMilk")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/baby/[babyId].tsx",
                                                lineNumber: 219,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 213,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 211,
                                columnNumber: 7
                            }, this),
                            (selectedType === "분유" || selectedType === "모유") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "mb-1 font-medium",
                                        children: selectedType === "분유" ? t("amountMl") : t("durationMin")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 226,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: amount,
                                        onChange: (e)=>setAmount(e.target.value),
                                        className: "border rounded p-2",
                                        min: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 229,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 225,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-150",
                                children: [
                                    "💾 ",
                                    t("save")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 240,
                                columnNumber: 7
                            }, this),
                            saveMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-green-600",
                                children: saveMessage
                            }, void 0, false, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 248,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 171,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/baby/[babyId].tsx",
                lineNumber: 168,
                columnNumber: 3
            }, this),
            activeTab === "output" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: [
                            "📌 ",
                            t("outputRecord")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        selected: selectedDate,
                        onChange: (date)=>setSelectedDate(date),
                        dateFormat: "yyyy-MM-dd",
                        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ko"]
                    }, void 0, false, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: "mt-4 w-full overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: "grid grid-cols-[1fr_2fr_auto] gap-2 bg-gray-200 p-2 rounded-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: t("time")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 261,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: t("detail")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 262,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: t("actions")
                                    }, void 0, false, {
                                        fileName: "[project]/pages/baby/[babyId].tsx",
                                        lineNumber: 263,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 260,
                                columnNumber: 3
                            }, this),
                            records.filter((r)=>r.date === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd")).sort((a, b)=>a.hour * 60 + a.minute - (b.hour * 60 + b.minute)).map((record)=>{
                                const timeLabel = `${String(record.hour).padStart(2, "0")}:${String(record.minute).padStart(2, "0")}`;
                                const valueLabel = record.type === "분유" ? `${record.value}ml` : record.type === "모유" ? `${record.value}분` : record.value;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                    className: "grid grid-cols-[1fr_2fr_auto] gap-2 items-center bg-white p-2 border-b last:border-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700",
                                            children: timeLabel
                                        }, void 0, false, {
                                            fileName: "[project]/pages/baby/[babyId].tsx",
                                            lineNumber: 283,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                record.type === "분유" ? "🍼" : "🤱",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    className: "text-indigo-600",
                                                    children: t(record.type === "분유" ? "formulaMilk" : "breastMilk")
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/baby/[babyId].tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 13
                                                }, this),
                                                " ",
                                                "— ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-800",
                                                    children: valueLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/baby/[babyId].tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/baby/[babyId].tsx",
                                            lineNumber: 286,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const newValue = prompt(t("editPrompt"), String(record.value));
                                                        if (newValue !== null) handleEdit(record.id, newValue);
                                                    },
                                                    className: "text-sm px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition",
                                                    children: [
                                                        "✏️ ",
                                                        t("edit")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/baby/[babyId].tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(record.id),
                                                    className: "text-sm px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition",
                                                    children: [
                                                        "🗑️ ",
                                                        t("delete")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/baby/[babyId].tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/baby/[babyId].tsx",
                                            lineNumber: 293,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, record.id, true, {
                                    fileName: "[project]/pages/baby/[babyId].tsx",
                                    lineNumber: 278,
                                    columnNumber: 9
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        children: [
                            "📊 ",
                            t("weeklySummary")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: days.map((day)=>{
                            const { milkTotal, breastTime, totalMilk } = getSummary(day);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "M/d (E)", {
                                        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ko"]
                                    }),
                                    ": 🍼 ",
                                    milkTotal,
                                    "ml + 🤱 ",
                                    breastTime,
                                    "분 = ",
                                    totalMilk,
                                    "ml"
                                ]
                            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "yyyy-MM-dd"), true, {
                                fileName: "[project]/pages/baby/[babyId].tsx",
                                lineNumber: 321,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pages/baby/[babyId].tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/baby/[babyId].tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/baby/[babyId].tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=pages_baby_%5BbabyId%5D_tsx_3c7d031e._.js.map