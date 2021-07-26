<script>
    export let negative;
    export let isDisabled;
</script>
<style>
    button{
          cursor: pointer;
          border-radius: 0.25rem;
          text-transform: uppercase;
    }

    .default {
        background-color:  #0064c8e0;
        color: #FFF;
        border: 1px solid  #0064c8e0 ;
    }

    .negative {
        background-color:  #6c7074e0;
        color: #FFF;
        border: 1px solid  #6c7074e0 ;
    }

    .disabled {
        background-color:  #ebebeb;
        color: #000000;
        border: 1px solid  #ebebeb ;
        cursor: default;
    }
  
  </style>
  
  <button class="{negative ? 'negative' : 'default'} {isDisabled ? 'disabled' : ''}" on:click disabled={isDisabled}>
      <slot/>
  </button>