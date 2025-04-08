<script lang="ts">
  import { shuffle } from "../scripts/utilities";

  interface Question {
    text: string;
    correctAnswers: string[];
    questionType: number;
    answerDetail: string;
  }

  let {
    dataUrl,
    isShuffled = false,
  }: { dataUrl: string; isShuffled: boolean } = $props();
  let questions: Question[] = $state([]);
  let currentQuestion: Question | null = $state(null);
  let currentQuestionIndex = $state(0);
  let submittedAnswer = $state("");
  let isQuestionComplete = $state(false);
  let isCorrectOnFirstTry = $state(true);
  let displayScore = $state(false);
  let questionsAnswered = $state(0);
  let score = $state(0);
  let responseStyle = $state(""); // refactor later
  let responseHTML = $state("<p>&nbsp;</p>");
  let isPracticeComplete = $derived(questionsAnswered === questions.length);

  function beginPractice() {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        questions = data;

        if (questions.length > 0) {
          if (isShuffled) shuffle(questions);
          currentQuestion = questions[0];
        }
      });
  }

  function submitAnswer() {
    if (!currentQuestion || submittedAnswer == "") return;

    if (currentQuestion.correctAnswers.includes(submittedAnswer)) {
      responseHTML = currentQuestion.answerDetail;
      responseStyle = "text-cyber-primary";
      isQuestionComplete = true;
      questionsAnswered++;

      if (isCorrectOnFirstTry) score++;
    } else {
      responseHTML = "Try again!";
      responseStyle = "text-cyber-danger";
      isCorrectOnFirstTry = false;
    }
  }

  function beginNextQuestion() {
    currentQuestion = questions[++currentQuestionIndex];
    resetQuestionState();
  }

  function restartPractice() {
    score = 0;
    questionsAnswered = 0;
    currentQuestion = questions[0];
    currentQuestionIndex = 0;
    displayScore = false;
    resetQuestionState();
  }

  function resetQuestionState() {
    isQuestionComplete = false;
    responseHTML = "<p>&nbsp;</p>";
    submittedAnswer = "";
    isCorrectOnFirstTry = true;
  }
</script>

<section>
  {#if questions.length === 0}
    <div class="card p-5">
      <button class="btn btn-outline-primary" onclick={beginPractice}>
        Begin Practice
      </button>
    </div>
  {:else}
    <div class="card">
      <div class="card-header">
        <p class="text-center h5">
          (#{currentQuestionIndex + 1} of {questions.length})
          {#if currentQuestion}
            {@html currentQuestion.text}
          {/if}
        </p>
      </div>
      {#if displayScore}
        <div class="card-body">
          <p class="text-center">Score: {score}/{questions.length}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-primary" onclick={restartPractice}>
            Restart Practice
          </button>
        </div>
      {:else}
        <div class="card-body">
          <label class="form-label" for="answer">Answer: </label>
          <input
            id="answer"
            class="form-control"
            bind:value={submittedAnswer}
          />
          <p class={responseStyle}>{@html responseHTML}</p>
          <p>Score: {score}</p>
        </div>
        <div class="card-footer">
          {#if isQuestionComplete && !isPracticeComplete}
            <button class="btn btn-outline-primary" onclick={beginNextQuestion}>
              Next Question
            </button>
          {:else if isPracticeComplete}
            <button
              class="btn btn-outline-primary"
              onclick={() => {
                displayScore = true;
              }}
            >
              End Practice
            </button>
          {:else}
            <!-- if !isQuestionComplete (may be needed?)-->
            <button class="btn btn-outline-primary" onclick={submitAnswer}>
              Submit
            </button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</section>
