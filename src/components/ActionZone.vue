<template>
  <div class="flex flex-col w-2/5 sm:w-3/5 pt-8 items-center">
    <form class="w-4/5 max-w-sm">
  `   <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            First name
          </label>
        </div>
        <div class="md:w-2/3">
          <input data-cy="watched-element" data-watched-element="true" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Joe">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
            Last name
          </label>
        </div>
        <div class="md:w-2/3">
          <input data-cy="watched-element" data-watched-element="true" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Black">
        </div>
      </div>
      <div class="flex flex-row justify-center mb-6">
        <div class="mr-4">
          <label class="inline-flex items-center">
            <input data-cy="watched-element" data-watched-element="true" type="radio" class="form-radio text-pink-600" name="radio-colors" value="1" checked>
            <span class="ml-2 ">Full Time</span>
          </label>
        </div>
        <div class="mr-4">
          <label class="inline-flex items-center">
            <input data-cy="watched-element" data-watched-element="true" type="radio" class="form-radio text-pink-600" name="radio-colors" value="2">
            <span class="ml-2">Part time</span>
          </label>
        </div>
        <div>
          <label class="inline-flex items-center">
            <input data-cy="watched-element" data-watched-element="true" type="radio" class="form-radio text-pink-600" name="radio-colors" value="3">
            <span class="ml-2">Temporary</span>
          </label>
        </div>
      </div>
      <div class="md:flex md:items-start align-start">
        <div class="w-1/3">
          <button data-cy="watched-element" data-watched-element="true" class="shadow bg-teal-500 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Send
          </button>
        </div>
      </div>
    </form>`
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ActionZone extends Vue {}
</script>
