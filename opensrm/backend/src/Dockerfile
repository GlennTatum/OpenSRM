FROM python:3.10

ENV PYTHONUNBUFFERED=1

WORKDIR /app

ENV PATH="/app/.venv/bin:$PATH"

ENV PYTHONPATH=/app

COPY . /app/

RUN pip install -e ./

CMD ["fastapi", "run", "--workers", "4", "app.py"]