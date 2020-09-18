<template>
    <div class="calendar">
        <div class="calendar__field">
            <div class="calendar__header">Calendar</div>
        </div>
    </div>
</template>

<style lang="scss">
.calendar {
     padding: 100px 0;
     display: flex;
     justify-content: center;
     align-items: center;   
     &__field {
         width: 500px;
         height: 600px;
         border: 3px solid #87d8b8;
         border-radius: 8px;
         display: flex;
         justify-content: center;
         align-items: flex-start;
     }
     &__header {
         position: absolute;
         background-color: #acffde;
         width: 500px;
         height: 100px;
         border: 3px solid #87d8b8;
         border-radius: 8px 8px 0 0;
         transform: translateY(-3px);
          display: flex;
         justify-content: center;
         align-items: center;
         font-size: 40px;
        font-weight: 100;
        color: #014329;
        text-align: center;
     }
}
</style>