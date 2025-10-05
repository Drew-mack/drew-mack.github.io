document.addEventListener('DOMContentLoaded', function() {
                const emailIcon = document.getElementById('emailIcon');
                const socialList = document.getElementById('socialList');
                const emailReveal = document.getElementById('emailReveal');
                const copyBtn = document.getElementById('copyBtn');
                const backBtn = document.getElementById('backBtn');
                
                let emailRevealed = false;

                function toggleEmail() {
                    emailRevealed = !emailRevealed;
                    
                    if (emailRevealed) {
                        socialList.classList.add('email-active');
                        emailReveal.classList.add('active');
                    } else {
                        socialList.classList.remove('email-active');
                        emailReveal.classList.remove('active');
                    }
                }

                function copyEmail() {
                    const email = 'drewmack04@icloud.com';
                    navigator.clipboard.writeText(email).then(() => {
                        copyBtn.classList.add('copied');
                        
                        setTimeout(() => {
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    }).catch(() => {
                        alert('Email: ' + email);
                    });
                }

                if (emailIcon) {
                    emailIcon.addEventListener('click', function(e) {
                        e.preventDefault();
                        toggleEmail();
                    });
                }

                if (backBtn) backBtn.addEventListener('click', toggleEmail);
                if (copyBtn) copyBtn.addEventListener('click', copyEmail);

                document.addEventListener('click', function(e) {
                    if (emailRevealed && !e.target.closest('.socials-container')) {
                        toggleEmail();
                    }
                });
            });
            