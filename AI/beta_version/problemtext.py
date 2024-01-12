### problem11
problem11_text ="6. 합수 \
\
\( f(x) = \begin{cases} \
ax^2 + bx + 1 & (x < 1) \\ \
-3bx - 1 & (x \geq 1) \
\end{cases} \) \
\
이 식과 관계의 정의역에서 미분가능할 때, \( a + b \)의 값은? \
(단, \( a, b \)는 상수이다.) [3점] \
\
① -3 \
② -1 \
③ 1 \
④ 3 \
⑤ 5"

problem11_solving_process_text = "함수 \( f(x) \)가 실수 전체의 집합에서 미분가능함으로 \
함수 \( f(x) \)는 \( x = 1 \)에서 미분가능하다. \
그리고로 함수 \( f(x) \)는 \( x = 1 \)에서 연속이다. \
\
\[ \
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = f(1) \text{에서} \
\] \
\
\[ \
a + b + 1 = -3b - 1 \
\] \
\
\[ \
a = -4b - 2 \
\] \
\
\[ \
\lim_{x \to 1^-} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^-} \frac{(ax^2 + bx + 1) - (-3b - 1)}{x - 1} \
\] \
\
\[ \
= \lim_{x \to 1^-} \frac{ax^2 + bx + 3b + 2}{x - 1} \
\] \
\
\[ \
= \lim_{x \to 1^-} \frac{(-4b - 2)x^2 + bx + 3b + 2}{x - 1} \
\] \
\
\[ \
= \lim_{x \to 1^-} \frac{(x - 1)((-4b - 2)x - 3b - 2)}{x - 1} \
\] \
\
\[ \
= -7b - 4 \
\] \
\
\[ \
\lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^+} \frac{(-3bx - 1) - (-3b - 1)}{x - 1} \
\] \
\
\[ \
= \lim_{x \to 1^+} \frac{-3b(x - 1)}{x - 1} = -3b \
\] \
\
함수 \( f(x) \)가 \( x = 1 \)에서 미분가능함으로 \
\
\[ \
-7b - 4 = -3b \text{에서} b = -1, a = 2 \
\]"





##problem12

problem12_text = "다음함수 \( f(x) \)에 대하여 \( \lim_{{h \to 0}} \frac{f(1+h)-f(1-h)}{h} = 6 \)일 때, \
\
\( \lim_{{x \to 1}} \frac{f(x^3)-f(1)}{x-1} \)의 값은? [3점] \
\
① 9   ② 11   ③ 13   ④ 15   ⑤ 17"

problem12_solving_process_text = "다항함수 \( f(x) \)는 \( x = 1 \)에서 미분가능하므로 \
\
\( 6 = \lim_{h \to 0} \frac{f(1 + h) - f(1 - h)}{h} \) \
\
\( = \lim_{h \to 0} \left[ \frac{f(1 + h) - f(1)}{h} + \frac{f(1 - h) - f(1)}{-h} \right] = 2f'(1) \) \
\
에서 \( f'(1) = 3 \) \
\
\( \lim_{x \to 1} \frac{f(x^3) - f(1)}{x - 1} = \lim_{x \to 1} \left[ \frac{f(x^3) - f(1)}{x^3 - 1} \times (x^2 + x + 1) \right] \) \
\
\( = f'(1) \times 3 = 9 \)"