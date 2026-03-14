// --- نظام فرض السيطرة الشامل ---
(function() {
    console.log("🚀 تم تفعيل نظام الإجبار: الرصيد الآن 5000$");

    const forceBalance = () => {
        if (typeof players !== 'undefined' && Array.isArray(players)) {
            players.forEach(player => {
                // إجبار الرصيد على 5000 مهما كانت الظروف
                player.balance = 5000;
            });

            // استدعاء دالة التحديث الأصلية لتعكس الرقم على الشاشة
            if (typeof updateBalances === 'function') {
                updateBalances();
            }
        }
    };

    // 1. التنفيذ فور تحميل الصفحة
    window.addEventListener('load', forceBalance);

    // 2. التنفيذ المباشر (في حال كان الملف يعمل بعد اللود)
    forceBalance();

    // 3. نظام "الحماية" - يفحص ويعدل الرصيد كل ثانية 
    // لضمان عدم نقصانه إذا اشترى اللاعب شيئاً أو خسر
    setInterval(forceBalance, 1000);

})();
