// كود تجريبي لملف game-logic.js
console.log("نظام السيطرة يعمل!");

window.addEventListener('load', () => {
    // تعديل فلوس اللاعبين إلى 2000 فوراً عند البدء
    if (typeof players !== 'undefined') {
        players.forEach(p => {
            p.balance = 2000;
        });
        updateBalances(); // تحديث الأرقام على الشاشة
        console.log("تم فرض ميزانية 2000$ لكل لاعب.");
    }
});
