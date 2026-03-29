// Authentic Indian Recipes
const recipes = [
    {
        id: 1, title: "Butter Chicken", category: "non-veg", image: "butter chicken.avif", time: "45 mins", rating: 4.9, servings: 4,
        ingredients: ["500g chicken", "2 tbsp butter", "1 cup cream", "Tomato puree", "Ginger-garlic", "Garam masala", "Chili powder", "Turmeric", "Salt", "Cilantro"],
        instructions: ["Marinate chicken", "Cook in butter", "Make sauce", "Simmer together", "Serve hot"]
    },
    {
        id: 2, title: "Paneer Tikka", category: "vegetarian", image: "paneer-tikka-2.jpg", time: "40 mins", rating: 4.8, servings: 4,
        ingredients: ["400g paneer", "Yogurt", "Tandoori masala", "Onion", "Tomato", "Cream", "Kasuri methi"],
        instructions: ["Marinate paneer", "Fry golden", "Make gravy", "Add cream", "Serve"]
    },
    {
        id: 3, title: "Aloo Gobi", category: "vegetarian", image: "aloo-gobi-recipe.jpg", time: "30 mins", rating: 4.7, servings: 4,
        ingredients: ["Potatoes", "Cauliflower", "Cumin", "Turmeric", "Coriander", "Chili powder"],
        instructions: ["Fry veggies", "Add spices", "Cook covered", "Serve with roti"]
    },
    {
        id: 4, title: "Chicken Biryani", category: "non-veg", image: "chicken-biryani-5.jpg", time: "90 mins", rating: 4.9, servings: 6,
        ingredients: ["Chicken", "Basmati rice", "Yogurt", "Onions", "Ghee", "Saffron"],
        instructions: ["Marinate", "Layer", "Dum cook", "Serve hot"]
    },
    {
        id: 5, title: "Veg Samosa", category: "snacks", image: "samosa-1200x808.jpg", time: "60 mins", rating: 4.8, servings: 12,
        ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"],
        instructions: ["Make dough", "Fill", "Fry golden", "Serve"]
    },
    {
        id: 6, title: "Gulab Jamun", category: "desserts", image: "gulab jamun.webp", time: "45 mins", rating: 4.9, servings: 20,
        ingredients: ["Milk powder", "Flour", "Sugar syrup"],
        instructions: ["Make balls", "Fry", "Soak syrup"]
    },
    {
        id: 7, title: "Dal Makhani", category: "vegetarian", image: "dal makhni.jpg", time: "480 mins", rating: 4.8, servings: 6,
        ingredients: ["Black lentils", "Cream", "Butter", "Tomatoes"],
        instructions: ["Soak overnight", "Cook", "Simmer with cream"]
    },
    {
        id: 8, title: "Butter Naan", category: "breads", image: "butter naan.webp", time: "120 mins", rating: 4.7, servings: 8,
        ingredients: ["Flour", "Yogurt", "Yeast", "Butter"],
        instructions: ["In a bowl, mix maida, sugar, salt, and baking soda"]

        
        
    },
    {
        id: 9, title: "veg pulao", category: "rice dishes", image: "veg-pulao.jpg", time: "90 mins", rating: 4.9, servings: 6,
        ingredients: ["vegitables", "Basmati rice", "Yogurt", "Onions", "Ghee", "Saffron"],
        instructions: ["Marinate", "Layer", "Dum cook", "Serve hot"]
    },
    {
  id: 10,
  title: "Masala Dosa",
  category: "vegetarian",
  image: "masal dosa.jpg",
  time: "45 mins",
  rating: 4.7,
  ingredients: ["Rice batter", "Potatoes", "Onions", "Mustard seeds", "Curry leaves", "Turmeric", "Green chili"],
  instructions: ["Prepare batter", "Cook dosa", "Make potato filling", "Assemble dosa", "Serve hot"]
},
{
  id: 11,
  title: "Palak Paneer",
  category: "vegetarian",
  image: "palak_paneer_.jpg",
  time: "35 mins",
  rating: 4.6,
  ingredients: ["Spinach", "Paneer", "Onion", "Garlic", "Ginger", "Cream", "Spices"],
  instructions: ["Blanch spinach", "Blend puree", "Cook masala", "Add paneer", "Simmer", "Serve"]
},
{
  id: 12,
  title: "Chole Bhature",
  category: "vegetarian",
  image: "chole bhature.webp",
  time: "60 mins",
  rating: 4.8,
  ingredients: ["Chickpeas", "Onion", "Tomato", "Garlic", "Chole masala", "Flour", "Yogurt"],
  instructions: ["Soak and cook chickpeas", "Prepare gravy", "Knead dough", "Fry bhature", "Serve hot"]
},
{
  id: 13,
  title: "Egg Curry",
  category: "non-veg",
  image: "egg curry.jpg",
  time: "30 mins",
  rating: 4.5,
  ingredients: ["Eggs", "Onion", "Tomato", "Garlic", "Spices", "Oil"],
  instructions: ["Boil eggs", "Prepare masala", "Add water", "Add eggs", "Simmer", "Serve"]
},
{
  id: 14,
  title: "Fish Fry",
  category: "non-veg",
  image: "fish fry.jpg",
  time: "25 mins",
  rating: 4.4,
  ingredients: ["Fish fillets", "Lemon juice", "Chili powder", "Turmeric", "Garlic paste", "Oil"],
  instructions: ["Marinate fish", "Heat oil", "Shallow fry fish", "Flip and cook", "Serve hot"]
},
{
  id: 15,
  title: "Rajma Chawal",
  category: "vegetarian",
  image: "Rajma-chawal.jpg",
  time: "50 mins",
  rating: 4.7,
  ingredients: ["Kidney beans", "Onion", "Tomato", "Garlic", "Spices", "Rice"],
  instructions: ["Soak and cook rajma", "Prepare gravy", "Simmer beans", "Cook rice", "Serve together"]
},
{
  id: 16,
  title: "Pav Bhaji",
  category: "snacks",
  image: "pav bhaji.webp",
  time: "40 mins",
  rating: 4.8,
  ingredients: ["Mixed vegetables", "Potatoes", "Butter", "Pav bhaji masala", "Pav bread"],
  instructions: ["Boil veggies", "Mash vegetables", "Cook with masala", "Toast pav", "Serve hot"]
},
{
  id: 17,
  title: "Tandoori Chicken",
  category: "non-veg",
  image: "Tandoori-Chicken-Square-FS.jpg",
  time: "50 mins",
  rating: 4.9,
  ingredients: ["Chicken", "Yogurt", "Tandoori masala", "Garlic", "Lemon juice"],
  instructions: ["Marinate chicken", "Preheat oven", "Cook chicken", "Char slightly", "Serve hot"]
},
{
  id: 18,
  title: "Vegetable Pulao",
  category: "vegetarian",
  image: "veg-pulao.jpg",
  time: "30 mins",
  rating: 4.3,
  ingredients: ["Basmati rice", "Mixed vegetables", "Spices", "Onion", "Ghee"],
  instructions: ["Wash rice", "Saute vegetables", "Add spices", "Cook rice", "Serve hot"]
},

    
];

// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.closeBtn');
const button = document.getElementById('theme-toggle');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 INDIAN RECIPE SITE LOADED');
    renderRecipes(recipes);
    setupAllEventListeners();  // FIXED: Better function name
    smoothScrolling();
    mobileMenu();
    console.log('✅ All event listeners attached');
});

// RENDER RECIPES
function renderRecipes(recipeList) {
    recipesGrid.innerHTML = '';
    recipeList.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.recipeId = recipe.id;
        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            </div>
            <div class="recipe-content">
                <div class="recipe-tags">
                    <span class="tag ${recipe.category}">${recipe.category.replace('-', ' ').toUpperCase()}</span>
                </div>
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <div class="time"><i class="fas fa-clock"></i> ${recipe.time}</div>
                    <div class="rating">${'★'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5-Math.floor(recipe.rating))}</div>
                </div>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

// 🔥 FIXED: COMPLETE EVENT LISTENERS
function setupAllEventListeners() {
    console.log('🔧 Setting up event listeners...');

    // 1. FILTER BUTTONS (TOP BUTTONS)
    filterBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            console.log(`✅ Filter clicked: ${this.dataset.filter}`);
            
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter recipes
            const filterValue = this.dataset.filter;
            let filtered = recipes;
            
            if (filterValue !== 'all') {
                filtered = recipes.filter(r => r.category === filterValue);
            }
            
            renderRecipes(filtered);
            console.log(`✅ Showing ${filtered.length} recipes`);
        });
    });

    // 2. CATEGORY CARDS (6 Big Cards)
    categoryCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            console.log(`🎯 Category clicked: ${this.dataset.category}`);
            
            // Find matching filter button
            const filterBtn = document.querySelector(`[data-filter="${this.dataset.category}"]`);
            
            if (filterBtn) {
                // Remove active from all filter buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                filterBtn.classList.add('active');
                
                // Filter and show
                const filtered = recipes.filter(r => r.category === this.dataset.category);
                renderRecipes(filtered);
                
                // Scroll to recipes
                document.getElementById('recipes').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                
                console.log(`✅ Category filter applied: ${filtered.length} recipes`);
            }
        });
    });

    // 3. RECIPE CARDS (Open Modal)
    recipesGrid.addEventListener('click', function(e) {
        const recipeCard = e.target.closest('.recipe-card');
        if (recipeCard) {
            const id = parseInt(recipeCard.dataset.recipeId);
            const recipe = recipes.find(r => r.id === id);
            if (recipe) {
                showRecipeModal(recipe);
            }
        }
    });

    // 4. MODAL CLOSE
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains("close")){
            const modal = document.getElementById("recipeModal");
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    console.log('✅ All 4 event types working!');
}



// MODAL FUNCTIONS
function showRecipeModal(recipe) {
    modalBody.innerHTML = `
        <div style="background: linear-gradient(135deg, #800b0b, #b33535); color: white; padding: 2rem; position: relative;">
            <h2 style="margin: 0 0 1rem 0;">${recipe.title}</h2>
            <span class="close" style="position: absolute; right: 20px; top: 20px; font-size: 2rem; cursor: pointer;">&times;</span>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <span style="background: ${recipe.category === 'vegetarian' ? '#4caf50' : '#ff5722'}; padding: 0.5rem 1rem; border-radius: 20px;">${recipe.category.toUpperCase()}</span>
                <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                <span><i class="fas fa-users"></i> Serves ${recipe.servings}</span>
            </div>
        </div>
        <div style="padding: 2rem; max-height: 70vh; overflow-y: auto;">
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 280px; object-fit: cover; border-radius: 15px; margin-bottom: 1.5rem;">
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #d32f2f; border-left: 4px solid #d32f2f; padding-left: 1rem;"><i class="fas fa-list"></i> Ingredients</h3>
                <ul style="list-style: none; padding: 0;">
                    ${recipe.ingredients.map((ing, i) => `<li style="padding: 0.7rem 0; padding-left: 1.5rem; position: relative;" data-ingredient="${i + 1}">${ing}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #a81818; border-left: 4px solid #754f4f; padding-left: 1rem;"><i class="fas fa-utensils"></i> Instructions</h3>
                <ol style="padding-left: 1.5rem;">
                    ${recipe.instructions.map((step, i) => `<li style="margin-bottom: 1rem; line-height: 1.6;">${i+1}. ${step}</li>`).join('')}
                </ol>
            </div>
            
            <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #000000, #141414); border-radius: 20px;">
                <h3 style="color: #d32f2f; margin-bottom: 1.5rem;">📊 Nutrition Info</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; font-size: 1.1rem; max-width: 400px; margin: 0 auto;">
                    <div><strong>450 kcal</strong></div>
                    <div><strong>25g Protein</strong></div>
                    <div><strong>15g Carbs</strong></div>
                    <div><strong>30g Fat</strong></div>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow ='auto';
    
}


// Smooth scroll
function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        });
    });
}

function mobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => {
    navMenu.classList.toggle("active");
};



console.log('🎉 WEBSITE FULLY LOADED - TEST CATEGORIES NOW!');