function openModal(isLogin = false) {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = isLogin ? 'Login' : 'Sign Up';
    
    // Form içeriğini oluştur
    const formContent = isLogin ? `
        <form id="login-form">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit" class="loginBtn">Login</button>
        </form>
        <p>Don't have an account? <a onclick="openModal(false)">Sign Up</a></p>
    ` : `
        <form id="register-form">
            <input type="text" id="name" placeholder="Username" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Password" required>
            <input type="password" id="confirm-password" placeholder="Confirm Password" required>
            <button type="submit" class="signupBtn">Sign Up</button>
        </form>
        <p>Already have an account? <a onclick="openModal(true)">Login</a></p>
    `;

    modalContent.innerHTML = formContent;
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
} 