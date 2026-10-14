document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من إعادة التحميل الافتراضية

    // جلب القيم المدخلة من المستخدم وتجريد الفراغات الزائدة
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorDisplay = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');

    // البيانات الصحيحة المطلوبة
    const correctEmail = "fathyabdoo@yahoo.com";
    const correctPassword = "1111";

    // إخفاء رسالة الخطأ السابقة إن وجدت
    errorDisplay.style.display = "none";

    if (emailInput === correctEmail && passwordInput === correctPassword) {
        // في حال كانت البيانات صحيحة:
        submitBtn.innerHTML = "جاري الانتقال...";
        submitBtn.style.background = "linear-gradient(90deg, #2e7d32, #4caf50)"; // تغيير لون الزر للأخضر الفاخر
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
        
        // تأثير انتقال زمني سلس لمنح واجهة المستخدم مظهرًا احترافيًا
        setTimeout(() => {
            window.location.href = "MASTER.html"; 
        }, 800);

    } else {
        // في حال كانت البيانات خاطئة:
        errorDisplay.innerHTML = "⚠️ عذراً، البريد الإلكتروني أو كلمة المرور غير صحيحة!";
        errorDisplay.style.display = "block"; // إظهار رسالة الخطأ باللون الأحمر
        
        // تأثير حركي خفيف لاهتزاز بطاقة الدخول عند الخطأ
        const card = document.querySelector('.login-card');
        card.style.animation = "shake 0.3s ease";
        
        // إعادة تعيين الأنميشن لتكراره عند الخطأ الموالي
        setTimeout(() => {
            card.style.animation = "none";
        }, 300);
    }
});
