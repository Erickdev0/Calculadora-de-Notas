function calcularNotas() {
            const numeroEstudantes = parseInt(document.getElementById("numeroEstudantes").value);
            let somaNotas = 0;
            let maiorNota = -Infinity;
            let menorNota = Infinity;

            for (let i = 1; i <= numeroEstudantes; i++) {
                const nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));
                somaNotas += nota;
                if (nota > maiorNota) {
                    maiorNota = nota;
                }
                if (nota < menorNota) {
                    menorNota = nota;
                }
            }

            const mediaTurma = somaNotas / numeroEstudantes;
            const resultado = `
                <p>Média da turma: ${mediaTurma.toFixed(2)}</p>
                <p>Maior nota: ${maiorNota.toFixed(2)}</p>
                <p>Menor nota: ${menorNota.toFixed(2)}</p>
            `;

            document.getElementById("resultado").innerHTML = resultado;
        }