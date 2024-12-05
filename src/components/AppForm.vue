<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Appform',
  data() {
    return {
      nome: '',
      cognome: '',
      email: '',
      telefono: '',
      nota: '',
      errors: {},
      successMessage: '', // To display a success message
      errorMessage: '', // To display an error message on submission
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      this.successMessage = '';
      this.errorMessage = '';

      // Validate Name
      if (!this.nome) {
        this.errors.nome = 'Name is required.';
      }

      // Validate Last Name
      if (!this.cognome) {
        this.errors.cognome = 'Last name is required.';
      }

      // Validate Email
      if (!this.email) {
        this.errors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }

      // Validate Phone Number
      if (!this.telefono) {
        this.errors.telefono = 'Phone number is required.';
      } else if (!/^\d{10}$/.test(this.telefono)) {
        this.errors.telefono = 'Please enter a valid 10-digit phone number.';
      }

      // Validate Note
      if (!this.nota) {
        this.errors.nota = 'Note is required.';
      }

      // General validation
      if (Object.keys(this.errors).length === 0) {
        this.submitForm();
      }
    },
    submitForm() {
      const templateParams = {
        from_name: `${this.nome} ${this.cognome}`,
        email_id: this.email,
        number_id: this.telefono,
        message: this.nota,
      };

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.status, response.text);
            this.successMessage = 'Email sent successfully!';
            this.resetForm();
          },
          (error) => {
            console.error('Error while sending:', error);
            this.errorMessage = 'Error occurred while sending your email.';
          }
        );
    },
    resetForm() {
      this.nome = '';
      this.cognome = '';
      this.email = '';
      this.telefono = '';
      this.nota = '';
      this.errors = {};
    },
  },
};

</script>


<template>
    <section class="bg-image py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-8 text-center py-5">
                <h3 class="text-white mb-4">Get in Touch</h3>
                <p class="text-white">I'm open to exciting projects, collaborations, or job opportunities. Feel free to reach out!</p>
            </div>
          <!-- Feedback Messages -->
          <div v-if="successMessage" class="text-center mb-4">
            <span style="font-size: 14px; color: rgba(39, 209, 20, 0.867);">{{ successMessage }}</span>
          </div>
          <div v-if="errorMessage" class="text-center mb-4">
            <span style="font-size: 14px; color: red;">{{ errorMessage }}</span>
          </div>
          <!-- Form Fields -->
          <div class="col-md-6 mb-3">
            <input
              type="text"
              v-model="nome"
              class="form-control form-input"
              placeholder="Enter your first name"
            />
            <small v-if="errors.nome" class="text-danger">{{ errors.nome }}</small>
          </div>
          <div class="col-md-6 mb-3">
            <input
              type="text"
              v-model="cognome"
              class="form-control form-input"
              placeholder="Enter your last name"
            />
            <small v-if="errors.cognome" class="text-danger">{{ errors.cognome }}</small>
          </div>
          <div class="col-md-6 mb-3">
            <input
              type="email"
              v-model="email"
              class="form-control form-input"
              placeholder="Enter your email"
            />
            <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
          </div>
          <div class="col-md-6 mb-3">
            <input
              type="tel"
              v-model="telefono"
              class="form-control form-input"
              placeholder="Enter your phone number"
            />
            <small v-if="errors.telefono" class="text-danger">{{ errors.telefono }}</small>
          </div>
          <div class="col-md-12 mb-5">
            <textarea
              v-model="nota"
              class="form-control form-input"
              rows="4"
              placeholder="Enter a note"
            ></textarea>
            <small v-if="errors.nota" class="text-danger">{{ errors.nota }}</small>
          </div>
          <div class="col-md-12 text-center">
            <button @click.prevent="validateForm" class="py-2 px-4 btn-send">Send</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  

<style lang="scss" scoped>

section{
    border-top-left-radius: 1.5rem; /* Arrotonda l'angolo inferiore sinistro */
    border-top-right-radius: 1.5rem; /* Arrotonda l'angolo inferiore destro */
}
.bg-image {
  background-image: url('../graphics/hero-background-dsk.webp');
  background-size: cover;
  background-position: center;
}

.form-label {
  color: white;
  font-weight: bold;
}

.form-input {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.675);
  border-radius: 10px;
  padding: 10px;
  color: white;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.458);
  font-size: 14px;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
}

.btn-send {
    border: 1px solid #ffffff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color:white;
    color: #151D4C;
    font-size: 14px;
    font-weight: 600;
}

.btn-send:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.text-danger{
    color: red;
    font-size: 14px;
}
</style>
