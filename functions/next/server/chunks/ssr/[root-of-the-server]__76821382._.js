module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/firebase/auth [external] (firebase/auth, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase/auth");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase/app [external] (firebase/app, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase/app");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase/firestore [external] (firebase/firestore, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/firebase.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// lib/firebase.ts
__turbopack_context__.s({
    "auth": (()=>auth),
    "db": (()=>db),
    "facebookProvider": (()=>facebookProvider),
    "googleProvider": (()=>googleProvider)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/app [external] (firebase/app, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/auth [external] (firebase/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyBl4ii299DYGkve-e531d4U08eVkpfDdIg",
    authDomain: "my-babycare-app.firebaseapp.com",
    projectId: "my-babycare-app",
    storageBucket: "my-babycare-app.firebasestorage.app",
    messagingSenderId: "307201812669",
    appId: "1:307201812669:web:9012ccbe17a93b09d16fd4",
    measurementId: "G-PFWL5ZVWQ4"
};
const app = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getFirestore"])(app);
const googleProvider = new __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__["GoogleAuthProvider"]();
const facebookProvider = new __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__["FacebookAuthProvider"]();
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/i18next [external] (i18next, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("i18next");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react-i18next [external] (react-i18next, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-i18next");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/locales/en/translation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"greeting\":\"Hello, {{name}}!\",\"logout\":\"Logout\",\"registerBaby\":\"Register a Baby\",\"myBabies\":\"My Babies\",\"noBabies\":\"No babies registered.\",\"accessRequests\":\"Access Requests\",\"noRequests\":\"No access requests.\",\"approve\":\"Approve\",\"reject\":\"Reject\",\"delete\":\"Delete\",\"loading\":\"Loading...\",\"googleLogin\":\"Login with Google\",\"hello\":\"Hello\",\"role\":\"Role\",\"nanny\":\"Nanny\",\"logoutError\":\"Logout failed\",\"addBaby\":\"Add Baby\",\"assignedBabies\":\"Assigned Babies\",\"noAssignedBabies\":\"No assigned babies.\",\"remove\":\"Remove\",\"deleteError\":\"Failed to remove.\",\"confirmRemove\":\"Are you sure you want to remove this baby?\",\"inputRecords\":\"📌 Input Records\",\"outputRecords\":\"📌 Output Records\",\"date\":\"📅 Date\",\"time\":\"⏰ Time\",\"type\":\"📄 Type\",\"amountMl\":\"🍼 Amount (ml)\",\"durationMin\":\"⏱️ Duration (Min)\",\"save\":\" Save\",\"edit\":\"Edit\",\"dailyRecords\":\"📅 {{date}} Records\",\"weeklySummary\":\" Weekly Summary\",\"formula\":\"🍼 Formula\",\"breastfeeding\":\"🤱 Breastfeeding\",\"urine\":\"💧 Urine\",\"poop\":\"💩 Poop\",\"summaryFormat\":\"{{day}}: 🍼 {{milk}}ml + 🤱 {{breast}}min = {{total}}ml / 💧 {{pee}}x / 💩 {{poop}}x\",\"selectDate\":\"Select Date\",\"newValuePrompt\":\"Enter new value\"}"));}}),
"[project]/locales/ko/translation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"greeting\":\"안녕하세요, {{name}} 님 👋\",\"logout\":\"로그아웃\",\"registerBaby\":\"➕ 아기 등록하기\",\"myBabies\":\" 내 아기 목록:\",\"noBabies\":\"등록된 아기가 없습니다.\",\"accessRequests\":\" 접근 요청 목록:\",\"noRequests\":\"접근 요청이 없습니다.\",\"approve\":\" 승인\",\"reject\":\" 거절\",\"delete\":\"삭제\",\"loading\":\"로딩 중...\",\"googleLogin\":\"구글 계정으로 로그인\",\"hello\":\"안녕하세요\",\"role\":\"역할\",\"nanny\":\"도우미\",\"logoutError\":\"로그아웃 중 오류 발생\",\"addBaby\":\"아기 추가하기\",\"assignedBabies\":\"맡은 아기 목록\",\"noAssignedBabies\":\"맡은 아기가 없습니다.\",\"remove\":\"삭제\",\"deleteError\":\"삭제에 실패했습니다.\",\"confirmRemove\":\"정말 이 아기를 목록에서 삭제하시겠습니까?\",\"parent\":\"보호자 \",\"inputRecords\":\"📌 기록 입력\",\"outputRecords\":\"📌 기록 출력\",\"date\":\"날짜\",\"time\":\"시간\",\"type\":\"종류\",\"amount\":\"🍼 용량\",\"duration\":\"⏱️ 시간\",\"save\":\"저장\",\"edit\":\"수정\",\"dailyRecords\":\"📅 {{date}} 기록\",\"weeklySummary\":\"주간 요약\",\"formula\":\"🍼 분유\",\"breastfeeding\":\"🤱 모유\",\"urine\":\"💧 소변\",\"poop\":\"💩 대변\",\"summaryFormat\":\"{{day}}요일: 🍼 {{milk}}ml + 🤱 {{breast}}분 = {{total}}ml / 💧 {{pee}}회 / 💩 {{poop}}회\",\"selectDate\":\"날짜 선택\",\"newValuePrompt\":\"새 값 입력\",\"home\":\"홈으로\",\"inputRecord\":\"기록 입력\",\"outputRecord\":\"기록 출력\",\"formulaMilk\":\"분유\",\"breastMilk\":\"모유\",\"amountMl\":\"용량 (ml)\",\"durationMin\":\"시간 (분)\",\"saved\":\"✅ 저장되었습니다!\",\"editPrompt\":\"새 값을 입력하세요\",\"babyInfo\":\"아기 정보\",\"name\":\"이름\",\"birthDate\":\"생년월일\"}"));}}),
"[project]/locales/vi/translation.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"greeting\":\"Xin chào, {{name}} 👋\",\"logout\":\"Đăng xuất\",\"registerBaby\":\"➕ Đăng ký em bé\",\"myBabies\":\" Danh sách em bé:\",\"noBabies\":\"Chưa có em bé nào.\",\"accessRequests\":\" Danh sách yêu cầu truy cập:\",\"noRequests\":\"Không có yêu cầu truy cập nào.\",\"approve\":\"✅ Chấp nhận\",\"reject\":\" Từ chối\",\"delete\":\"Xoá\",\"loading\":\"Đang tải...\",\"googleLogin\":\"Đăng nhập bằng Google\",\"hello\":\"Xin chào\",\"role\":\"Vai trò\",\"nanny\":\"Người trông trẻ\",\"logoutError\":\"Đăng xuất thất bại\",\"addBaby\":\"Thêm bé\",\"assignedBabies\":\"Danh sách bé được giao\",\"noAssignedBabies\":\"Không có bé nào được giao.\",\"remove\":\"Xóa\",\"deleteError\":\"Xóa thất bại.\",\"confirmRemove\":\"Bạn có chắc chắn muốn xóa bé này khỏi danh sách không?\",\"parent\":\"Phụ huynh\",\"inputRecords\":\" Nhập ghi chép\",\"outputRecords\":\" Xuất ghi chép\",\"date\":\"Ngày\",\"time\":\"Giờ\",\"type\":\"Loại\",\"amount\":\" Lượng sữa\",\"duration\":\"⏱ Thời gian bú\",\"save\":\"Lưu\",\"edit\":\"Chỉnh sửa\",\"dailyRecords\":\" Ghi chép ngày {{date}}\",\"weeklySummary\":\"Tổng kết tuần\",\"formula\":\" Sữa công thức\",\"breastfeeding\":\" Sữa mẹ\",\"urine\":\" Đi tiểu\",\"poop\":\" Đi ngoài\",\"summaryFormat\":\"{{day}}: 🍼 {{milk}}ml + 🤱 {{breast}}phút = {{total}}ml / 💧 {{pee}} lần / 💩 {{poop}} lần\",\"selectDate\":\"Chọn ngày\",\"newValuePrompt\":\"Nhập giá trị mới\",\"home\":\"Trang chủ\",\"inputRecord\":\"Nhập dữ liệu\",\"outputRecord\":\"Xem dữ liệu\",\"formulaMilk\":\"Sữa công thức\",\"breastMilk\":\"Sữa mẹ\",\"amountMl\":\"Lượng (ml)\",\"durationMin\":\"Thời gian (phút)\",\"saved\":\"✅ Đã lưu!\",\"editPrompt\":\"Nhập giá trị mới\",\"babyInfo\":\"Thông tin em bé\",\"name\":\"Tên\",\"birthDate\":\"Ngày sinh\"}"));}}),
"[project]/lib/i18n.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// lib/i18n.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/i18next [external] (i18next, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-i18next [external] (react-i18next, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/locales/en/translation.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$ko$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/locales/ko/translation.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$vi$2f$translation$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/locales/vi/translation.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const savedLang = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : null;
__TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__["default"].use(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__["initReactI18next"]).init({
    resources: {
        en: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$en$2f$translation$2e$json__$28$json$29$__["default"]
        },
        ko: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$ko$2f$translation$2e$json__$28$json$29$__["default"]
        },
        vi: {
            translation: __TURBOPACK__imported__module__$5b$project$5d2f$locales$2f$vi$2f$translation$2e$json__$28$json$29$__["default"]
        }
    },
    lng: savedLang || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$i18next__$5b$external$5d$__$28$i18next$2c$__esm_import$29$__["default"];
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// pages/_app.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/auth [external] (firebase/auth, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [ssr] (ecmascript)"); // 다국어 초기화
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-i18next [external] (react-i18next, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [checkingUser, setCheckingUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const { t } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$i18next__$5b$external$5d$__$28$react$2d$i18next$2c$__esm_import$29$__["useTranslation"])(); // 다국어 사용
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$auth__$5b$external$5d$__$28$firebase$2f$auth$2c$__esm_import$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["auth"], async (user)=>{
            if (user) {
                const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "users", user.uid);
                const snap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(userRef);
                // 등록된 유저가 아니고 현재 경로가 /register가 아닐 경우
                if (!snap.exists() && router.pathname !== "/register") {
                    router.push("/register");
                } else {
                    setCheckingUser(false);
                }
            } else {
                // 로그인하지 않은 경우, 로그인 페이지로 이동
                if (router.pathname !== "/login") {
                    router.push("/login");
                }
                setCheckingUser(false);
            }
        });
        return ()=>unsubscribe();
    }, [
        router
    ]);
    if (checkingUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                paddingTop: "30vh",
                fontSize: "18px"
            },
            children: [
                t("loading"),
                "..."
            ]
        }, void 0, true, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__76821382._.js.map